function TaskFilter({ filter, setFilter }) {
  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>

      <button
        className={filter === "not-completed" ? "active" : ""}
        onClick={() => setFilter("not-completed")}
      >
        Not Completed
      </button>
    </div>
  )
}

export default TaskFilter