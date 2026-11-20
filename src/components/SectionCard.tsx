import type { ReactElement } from "react";
import type { TodoSection } from "../types";
import type { TodoActions } from "../hooks/useTodoState";
import TaskItem from "./TaskItem";
import AddTaskForm from "./AddTaskForm";
import ConfirmButton from "./ConfirmButton";

export interface SectionCardProps {
  section: TodoSection;
  actions: TodoActions;
}

export default function SectionCard({ section, actions }: SectionCardProps): ReactElement {
  const done = section.tasks.filter((task) => task.completed).length;

  return (
    <section className="rounded-box border border-base-content/10 bg-base-100">
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <button
          className="btn btn-ghost btn-xs px-1"
          onClick={() => actions.toggleSectionCollapsed(section.id)}
          aria-expanded={!section.collapsed}
          aria-label="Toggle section"
        >
          <svg
            className={`chevron transition-transform ${section.collapsed ? "-rotate-90" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <input
          type="text"
          className="min-w-0 rounded bg-transparent px-1 font-semibold leading-6 outline-none focus:ring-1 focus:ring-primary/40"
          size={Math.min(Math.max(section.title.length, 6), 40)}
          maxLength={100}
          value={section.title}
          onChange={(e) => actions.renameSection(section.id, e.target.value)}
          onBlur={() => {
            if (!section.title.trim()) actions.renameSection(section.id, "Untitled section");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
          aria-label="Section title"
        />
        <span className="badge badge-soft badge-sm">
          {done}/{section.tasks.length}
        </span>
        <button
          className="btn btn-ghost btn-xs ml-auto text-base-content/60"
          onClick={() => actions.clearSection(section.id)}
        >
          Clear
        </button>
        <ConfirmButton
          label="✕"
          confirmLabel="Delete?"
          baseClass="btn btn-ghost btn-xs text-base-content/50"
          armedClass="btn btn-error btn-outline btn-xs"
          ariaLabel={`Delete section "${section.title}" and all its tasks`}
          onConfirm={() => actions.deleteSection(section.id)}
        />
      </div>
      <div className={section.collapsed ? "hidden" : "px-4 pb-3"}>
        {section.tasks.length > 0 ? (
          <ul className="divide-y divide-base-content/5">
            {section.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => actions.toggleTask(section.id, task.id)}
                onDelete={() => actions.deleteTask(section.id, task.id)}
              />
            ))}
          </ul>
        ) : (
          <p className="py-2 text-sm text-base-content/50">No tasks yet.</p>
        )}
        <AddTaskForm onAdd={(title) => actions.addTask(section.id, title)} />
      </div>
    </section>
  );
}
