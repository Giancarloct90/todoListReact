// COMPONENTS

const DetailsTask = ({ tasks, handleDeleteTask }) => {
  const changeClass = (e) => {
    e.currentTarget.classList.toggle("taskCompleted");
    e.currentTarget.firstChild.classList.toggle("tskCom");
  };

  return (
    <>
      {tasks.map((task) => (
        <div className="task" key={task.id} onClick={changeClass}>
          <h1 className="hTask">{task.task}</h1>
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="btnDelete"
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default DetailsTask;
