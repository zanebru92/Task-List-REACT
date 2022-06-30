import { Task } from "../Task";

export function Tasks({ tasks, handleTaskClick, handleTaskDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}