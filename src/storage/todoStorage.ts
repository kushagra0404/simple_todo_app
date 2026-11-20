import type { TodoSection, TodoTask } from "../types";
import { STORAGE_KEY } from "../constants";

function isTask(value: unknown): value is TodoTask {
  if (typeof value !== "object" || value === null) return false;
  const task = value as Record<string, unknown>;
  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.completed === "boolean"
  );
}

function isSection(value: unknown): value is TodoSection {
  if (typeof value !== "object" || value === null) return false;
  const section = value as Record<string, unknown>;
  return (
    typeof section.id === "string" &&
    typeof section.title === "string" &&
    Array.isArray(section.tasks) &&
    section.tasks.every(isTask) &&
    typeof section.collapsed === "boolean"
  );
}

export function loadSections(): TodoSection[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter(isSection);
  } catch {
    return [];
  }
}

export function saveSections(sections: TodoSection[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  } catch {
    // Storage full or unavailable — state still works in memory.
  }
}
