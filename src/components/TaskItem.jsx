function TaskItem({
  task,
  toggleTask,
  deleteTask,
  changePriority
}) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span className="task-text">
          {task.text}
        </span>
      </div>

      <div className="task-actions">
        <select
          value={task.priority}
          onChange={(e) =>
            changePriority(task.id, e.target.value)
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem