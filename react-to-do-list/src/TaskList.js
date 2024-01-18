import React, { useState } from 'react';
import './taskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
    setTaskInput('');
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const deleteCompletedTask = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    completedTask.completed = !completedTask.completed;
    if (completedTask.completed) {
      setCompletedTasks([...completedTasks, completedTask]);
    } else {
      deleteCompletedTask(completedTasks.indexOf(completedTask));
    }
    setTasks(newTasks);
  };

  return (
    <div id="app">
      <h1>Gjøremål</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(taskInput);
        }}
      >
        <label htmlFor="taskInput">Ny oppgave:</label>
        <input
          type="text"
          id="taskInput"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Skriv oppgaven"
          required
        />
        <button type="submit">Legg til</button>
      </form>
      <h3>Ugjennomførte oppgaver:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Slett
            </button>
            <button onClick={() => toggleComplete(index)} className="toggle-btn">
              {task.completed ? 'Ufullført' : 'Fullført'}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Gjennomførte oppgaver:</h3>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index} className="completed-task">
              {task.text}
              <button onClick={() => deleteCompletedTask(index)} className="delete-btn">
                Slett
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
