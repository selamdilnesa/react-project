function TaskForm({ input, setInput, addTask }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>
    </div>
  )
}

export default TaskForm