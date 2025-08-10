import type { ButtonHTMLAttributes } from "react";

export interface FilterButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  filter: "all" | "completed" | "incomplete";
  setFilter: React.Dispatch<
    React.SetStateAction<"all" | "completed" | "incomplete">
  >;
  filterType: "all" | "completed" | "incomplete";
}

function FilterButton({
  filter,
  setFilter,
  filterType,
  ...props
}: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setFilter(filterType)}
      className={`filter-button${filter === filterType ? " active" : ""}`}
      aria-pressed={filter === filterType}
      {...props}
    >
      {filterType}
    </button>
  );
}

export default FilterButton;
