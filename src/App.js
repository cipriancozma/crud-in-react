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
    };
    const newTodoList = [...todos, task];
    setTodos(newTodoList);
  };

  const deleteTask = (id) => {
    const filteredTodos = todos.filter((task) => task.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todos.map((el) => {
          return <Task el={el} id={el.id} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
