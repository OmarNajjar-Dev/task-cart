import { useState } from "react";
import { ClipboardList } from "lucide-react";
import TaskForm from "../components/TaskForm";
import FilterButton from "../components/FilterButton";
import type { FilterButtonProps } from "../components/FilterButton";
import TaskList from "../components/TaskList";

type Filter = FilterButtonProps["filter"];
const filterTypes: Filter[] = ["all", "completed", "incomplete"] as const;

function Tasks() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <section className="flex flex-col gap-6">
      {/* Page header */}
      <header className="flex items-center gap-4">
        <ClipboardList className="text-indigo-500" aria-hidden="true" />
        <h1 className="text-2xl font-bold text-gray-900">Task Manager</h1>
      </header>

      {/* Add Task Card */}
      <section
        className="p-8 shadow-md bg-white rounded-md"
        aria-labelledby="add-task-heading"
      >
        <h2 id="add-task-heading" className="sr-only">
          Add a new task
        </h2>
        <TaskForm />
      </section>

      {/* Task Filters */}
      <nav
        className="flex items-center justify-between"
        aria-label="Task filters"
      >
        <h2 className="text-lg font-semibold">Tasks</h2>
        <div className="flex gap-4" role="group" aria-label="Filters">
          {filterTypes.map((filterType) => (
            <FilterButton
              key={filterType}
              filter={filter}
              setFilter={setFilter}
              filterType={filterType}
            />
          ))}
        </div>
      </nav>

      {/* Task List */}
      <section
        className="flex flex-col gap-4 mt-4"
        aria-labelledby="task-list-heading"
      >
        <h2 id="task-list-heading" className="sr-only">
          Task list
        </h2>
        <TaskList />
      </section>
    </section>
  );
}

export default Tasks;
