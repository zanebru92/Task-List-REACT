import './style.css'
import {CgClose, CgInfo} from 'react-icons/cg'
export function Task({ task, handleTaskClick, handleTaskDelete }) {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div onClick={() => handleTaskClick(task.id)} className="task-title">
        {task.title}
      </div>
      <div className="buttons-container">
        <button onClick={()=> handleTaskDelete(task.id)} className='close-btn'>
          <CgClose size={16}/>
        </button>
        <button  className='show-task-btn'>
          <CgInfo size={16}/>
        </button>
      </div>
    </div>
  );
}