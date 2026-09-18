import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskFilter from "./components/TaskFilter"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("all")

  function addTask() {
    if (input.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      priority: "medium"
    }

    setTasks([...tasks, newTask])
    setInput("")
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function changePriority(id, priority) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, priority }
          : task
      )
    )
  }

  function clearCompleted() {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed
    }

    if (filter === "not-completed") {
      return !task.completed
    }

    return true
  })

  const completedTasks = tasks.filter((task) => task.completed).length
  const activeTasks = tasks.filter((task) => !task.completed).length

  return (
    <div className="app">
      <div className="container">
        <h1>Dynamic Task Manager</h1>
        <p className="subtitle">Organize your tasks and stay productive</p>

        <TaskForm
          input={input}
          setInput={setInput}
          addTask={addTask}
        />

        <div className="stats">
          <div className="stat-card">
            <span>Total Tasks</span>
            <strong>{tasks.length}</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>{completedTasks}</strong>
          </div>

          <div className="stat-card">
            <span>Active</span>
            <strong>{activeTasks}</strong>
          </div>
        </div>

        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />

        {completedTasks > 0 && (
          <button
            className="clear-button"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        )}

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          changePriority={changePriority}
        />
      </div>
    </div>
  )
}

export default App