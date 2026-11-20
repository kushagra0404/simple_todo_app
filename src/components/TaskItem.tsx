import type { ReactElement } from "react";
import type { TodoTask } from "../types";

export interface TaskItemProps {
  task: TodoTask;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps): ReactElement {
  return (
    <li className="group flex items-center gap-3 py-2">
      <input
        type="checkbox"
        className="checkbox checkbox-sm"
        checked={task.completed}
        onChange={onToggle}
        aria-label={`Mark "${task.title}" as ${task.completed ? "not completed" : "completed"}`}
      />
      <span className="flex-1">
        <span className={task.completed ? "line-through text-base-content/45" : ""}>
          {task.title}
        </span>
        {task.completed && (
          <span className="ml-2 text-[0.65rem] font-medium uppercase tracking-wider text-success no-underline">
            done
          </span>
        )}
      </span>
      <button
        className="btn btn-ghost btn-xs text-base-content/50 group-hover:text-base-content"
        onClick={onDelete}
        aria-label={`Delete task "${task.title}"`}
      >
        ✕
      </button>
    </li>
  );
}
