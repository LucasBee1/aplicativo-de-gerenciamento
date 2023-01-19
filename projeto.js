import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a new task" 
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
