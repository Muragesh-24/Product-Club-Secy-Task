import React from 'react';
import './Task.css';

function Atask({ head, task, deadline, onEdit, onDelete }) {
  return (
    <div className='Atask'>
      <div className="head">{head}</div>
      <div className="task">{task}</div>
      <div className="deadline">🕒 {deadline}</div>
      <div className="buts">
       
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Atask;
