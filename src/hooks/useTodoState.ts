import { useEffect, useMemo, useState } from "react";
import type { TodoSection } from "../types";
import { loadSections, saveSections } from "../storage/todoStorage";

export interface TodoStats {
  sections: number;
  tasks: number;
  done: number;
}

export interface TodoActions {
  addSection(title: string): void;
  renameSection(sectionId: string, title: string): void;
  toggleSectionCollapsed(sectionId: string): void;
  clearSection(sectionId: string): void;
  deleteSection(sectionId: string): void;
  addTask(sectionId: string, title: string): void;
  toggleTask(sectionId: string, taskId: string): void;
  deleteTask(sectionId: string, taskId: string): void;
  clearAll(): void;
}

export interface TodoState {
  sections: TodoSection[];
  stats: TodoStats;
  actions: TodoActions;
}

export function useTodoState(): TodoState {
  const [sections, setSections] = useState<TodoSection[]>(() => loadSections());

  useEffect(() => {
    saveSections(sections);
  }, [sections]);

  const stats = useMemo<TodoStats>(
    () => ({
      sections: sections.length,
      tasks: sections.reduce((total, section) => total + section.tasks.length, 0),
      done: sections.reduce(
        (total, section) => total + section.tasks.filter((task) => task.completed).length,
        0,
      ),
    }),
    [sections],
  );

  const actions = useMemo<TodoActions>(
    () => ({
      addSection(title) {
        setSections((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            title: title.trim() || "Untitled section",
            tasks: [],
            collapsed: false,
          },
        ]);
      },
      renameSection(sectionId, title) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId
              ? { ...section, title: title.slice(0, 100) }
              : section,
          ),
        );
      },
      toggleSectionCollapsed(sectionId) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId ? { ...section, collapsed: !section.collapsed } : section,
          ),
        );
      },
      clearSection(sectionId) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId ? { ...section, tasks: [] } : section,
          ),
        );
      },
      deleteSection(sectionId) {
        setSections((prev) => prev.filter((section) => section.id !== sectionId));
      },
      addTask(sectionId, title) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  tasks: [
                    ...section.tasks,
                    {
                      id: crypto.randomUUID(),
                      title: title.slice(0, 200),
                      completed: false,
                    },
                  ],
                }
              : section,
          ),
        );
      },
      toggleTask(sectionId, taskId) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  tasks: section.tasks.map((task) =>
                    task.id === taskId ? { ...task, completed: !task.completed } : task,
                  ),
                }
              : section,
          ),
        );
      },
      deleteTask(sectionId, taskId) {
        setSections((prev) =>
          prev.map((section) =>
            section.id === sectionId
              ? { ...section, tasks: section.tasks.filter((task) => task.id !== taskId) }
              : section,
          ),
        );
      },
      clearAll() {
        setSections([]);
      },
    }),
    [],
  );

  return { sections, stats, actions };
}
