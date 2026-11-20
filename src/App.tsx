import type { ReactElement } from "react";
import { useTodoState } from "./hooks/useTodoState";
import Header from "./components/Header";
import AddSectionButton from "./components/AddSectionButton";
import SectionList from "./components/SectionList";

export default function App(): ReactElement {
  const { sections, stats, actions } = useTodoState();

  return (
    <div className="min-h-screen bg-base-200">
      <Header stats={stats} onClearAll={actions.clearAll} />
      <main className="mx-auto max-w-2xl space-y-3 px-4 py-5">
        <AddSectionButton onAdd={actions.addSection} />
        {sections.length === 0 ? (
          <div className="rounded-box border border-dashed border-base-content/20 bg-base-100 py-10 text-center">
            <p className="text-4xl">✓</p>
            <p className="mt-2 font-semibold">All clear</p>
            <p className="text-sm text-base-content/60">Add a section to start planning again.</p>
          </div>
        ) : (
          <SectionList sections={sections} actions={actions} />
        )}
      </main>
    </div>
  );
}
