import { FaTimes } from 'react-icons/fa'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.title} <FaTimes
          style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.time}</p>
      <p>Created: {task.created}</p>
      <p>Updated: {task.updated}</p>
      <img src={task.image} width='70' height='70' />
      <Link to = {`/detail/${task.id}`}>Detail</Link>
    </div>
  )
}

export default Task