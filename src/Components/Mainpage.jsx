import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Atask from './Atask'
import './Mainpage.css'
import './Navbar.css'
import Footer from './Footer'

function Mainpage() {
  const [tasks, setTasks] = useState([])
  const [head, setHead] = useState('')
  const [task, setTask] = useState('')
  const [deadline, setDeadline] = useState('')
  const [loaded, setLoaded] = useState(false) 

 
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
    setLoaded(true) 
  }, [])


  useEffect(() => {
    if (loaded) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks, loaded]) 

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, i) => i !== indexToDelete)
    setTasks(updatedTasks)
  }

  const handleAdd = () => {
    if (!head.trim() || !task.trim()) {
      alert('Please enter both Task Title and Description!')
      return
    }

    const newTask = {
      head: head.trim(),
      task: task.trim(),
      deadline: deadline || 'No deadline',
    }

    setTasks([...tasks, newTask])
    setHead('')
    setTask('')
    setDeadline('')
  }

  return (
    <div className="Dashboard">
      <Navbar />

      <div className="adding">
        <h2>Add a New Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <div className="task-list">
        <h2>Your Tasks</h2>
        {tasks.length > 0 ? (
          tasks.map((t, index) => (
            <Atask
              key={index}
              head={t.head}
              task={t.task}
              deadline={t.deadline}
              onDelete={() => handleDelete(index)}
            />
          ))
        ) : (
          <h2 style={{ color: 'black' }}>Start adding Tasks,No tasks added yet.</h2>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default Mainpage
