import TaskItem from "./TaskItem"

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  changePriority
}) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h2>No tasks yet</h2>
        <p>Add a task to get started.</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          changePriority={changePriority}
        />
      ))}
    </div>
  )
}

export default TaskList