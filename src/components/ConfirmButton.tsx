import { useEffect, useRef, useState, type ReactElement } from "react";

export interface ConfirmButtonProps {
  label: string;
  confirmLabel: string;
  baseClass?: string;
  armedClass?: string;
  onConfirm: () => void;
  ariaLabel?: string;
}

export default function ConfirmButton({
  label,
  confirmLabel,
  baseClass = "btn btn-ghost btn-xs",
  armedClass = "btn btn-error btn-outline btn-xs",
  onConfirm,
  ariaLabel,
}: ConfirmButtonProps): ReactElement {
  const [armed, setArmed] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  return (
    <button
      type="button"
      className={armed ? armedClass : baseClass}
      aria-label={ariaLabel ?? label}
      aria-pressed={armed}
      onClick={() => {
        if (armed) {
          window.clearTimeout(timer.current);
          setArmed(false);
          onConfirm();
          return;
        }
        setArmed(true);
        timer.current = window.setTimeout(() => setArmed(false), 3000);
      }}
    >
      {armed ? confirmLabel : label}
    </button>
  );
}
