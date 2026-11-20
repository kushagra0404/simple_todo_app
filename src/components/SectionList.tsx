import type { ReactElement } from "react";
import type { TodoSection } from "../types";
import type { TodoActions } from "../hooks/useTodoState";
import SectionCard from "./SectionCard";

export interface SectionListProps {
  sections: TodoSection[];
  actions: TodoActions;
}

export default function SectionList({ sections, actions }: SectionListProps): ReactElement {
  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <SectionCard key={section.id} section={section} actions={actions} />
      ))}
    </div>
  );
}
