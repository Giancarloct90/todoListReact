// HOOKS
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";

// COMPONENTS
import DetailsTask from "./DetailsTask";

const TodoList = () => {
  const [txtTask, setTxtTask] = useState("");
  let [tasks, setTask] = useState([]);

  const handleAddTasks = () => {
    if (txtTask === "") {
      return;
    }
    setTask((prevTasks) => [
      ...prevTasks,
      { id: new Date().getTime(), task: txtTask },
    ]);
    setTxtTask("");
  };

  const handleDeleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((taskt) => taskt.id !== id));
  };

  return (
    <div className="divTodoList">
      <h1 className="todoTitle">ToDo List</h1>
      <div className="divContentTodoList">
        <div className="inputTask">
          <input
            className="txtTask"
            type="text"
            value={txtTask}
            onChange={(e) => setTxtTask(e.target.value)}
            required
          />
          <button onClick={handleAddTasks} className="btnAddTask">
            ADD TASK
          </button>
        </div>
        <div className="Tasks">
          {tasks.length > 0 && (
            <DetailsTask tasks={tasks} handleDeleteTask={handleDeleteTask} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
