import type { ReactElement } from "react";
import type { TodoStats } from "../hooks/useTodoState";
import ConfirmButton from "./ConfirmButton";

export interface HeaderProps {
  stats: TodoStats;
  onClearAll: () => void;
}

export default function Header({ stats, onClearAll }: HeaderProps): ReactElement {
  return (
    <header className="sticky top-0 z-10 border-b border-base-content/10 bg-base-100">
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
        <div>
          <h1 className="text-lg font-bold leading-tight">Simple TODO</h1>
          <p className="text-xs text-base-content/60">
            {stats.sections} section{stats.sections === 1 ? "" : "s"} · {stats.tasks} task
            {stats.tasks === 1 ? "" : "s"} · {stats.done} done
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <ConfirmButton
            label="Clear all"
            confirmLabel="Clear everything?"
            baseClass="btn btn-error btn-outline btn-sm"
            armedClass="btn btn-error btn-sm"
            onConfirm={onClearAll}
          />
        </div>
      </div>
    </header>
  );
}
