import { useState, type FormEvent, type ReactElement } from "react";

export interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps): ReactElement {
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const title = text.trim();
    if (!title) return;
    onAdd(title);
    setText("");
  };

  return (
    <form className="mt-2 flex gap-2" onSubmit={handleSubmit}>
      <input
        className="input input-sm flex-1"
        type="text"
        maxLength={200}
        placeholder="Add a task…"
        autoComplete="off"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary btn-sm" type="submit">
        Add
      </button>
    </form>
  );
}
