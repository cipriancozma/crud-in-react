import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    if (newTask === "") {
      return alert("Please enter a task...");
    }

    const newTodoList = [...todos, task];
    setTodos(newTodoList);
  };

  const deleteTask = (id) => {
    const filteredTodos = todos.filter((task) => task.id !== id);
    setTodos(filteredTodos);
  };

  const handleCompleted = (id) => {
    const newTodos = todos.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todos.map((el) => {
          return (
            <Task
              el={el}
              key={el.id}
              deleteTask={deleteTask}
              handleCompleted={handleCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
