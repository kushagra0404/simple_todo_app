import { useEffect, useRef, useState, type FormEvent, type ReactElement } from "react";

export interface AddSectionButtonProps {
  onAdd: (title: string) => void;
}

export default function AddSectionButton({ onAdd }: AddSectionButtonProps): ReactElement {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (adding) inputRef.current?.focus();
  }, [adding]);

  if (!adding) {
    return (
      <button
        className="btn btn-primary w-full"
        onClick={() => setAdding(true)}
      >
        + Add Section
      </button>
    );
  }

  const cancel = () => {
    setName("");
    setAdding(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const title = name.trim();
    if (!title) return;
    onAdd(title);
    setName("");
    setAdding(false);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="input input-sm flex-1"
        type="text"
        maxLength={100}
        placeholder="Section name…"
        autoComplete="off"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") cancel();
        }}
      />
      <button className="btn btn-primary btn-sm" type="submit" disabled={!name.trim()}>
        Add
      </button>
      <button className="btn btn-ghost btn-sm" type="button" onClick={cancel}>
        ✕
      </button>
    </form>
  );
}
