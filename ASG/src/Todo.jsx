function Todo(props) {
  const colors = {
    Done: "#00ff00",
    Running: "#ff0000",
    Pending: "#0000ff",
  };

  const fonts = {
    Done: "Times New Roman",
    Running: "Arial",
    Pending: "Calibri",
  };

  return (
    <>
      <h1 onClick={props.appFunction}>
        Task Name: {props.task}
      </h1>
      <h3
        style={{
          color: colors[props.status] || "#0000ff",
          fontFamily: fonts[props.status] || "calibri",
        }}
      >
        Task Status: {props.status}
      </h3>
      <p>Description: {props.description}</p>
      <hr />
    </>
  );
}

export default Todo;