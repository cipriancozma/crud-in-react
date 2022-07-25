const Task = ({ el, id, deleteTask }) => {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{el.taskName}</h2>
      <button onClick={() => deleteTask(el.id)}>X</button>
    </div>
  );
};

export default Task;
