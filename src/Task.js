const Task = ({ el, deleteTask, handleCompleted }) => {
  return (
    <div
      key={el.id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          backgroundColor: el.completed ? "green" : "",
        }}
      >
        {el.taskName}
      </h2>
      <button onClick={() => handleCompleted(el.id)}>Completed</button>
      <button onClick={() => deleteTask(el.id)}>X</button>
    </div>
  );
};

export default Task;
