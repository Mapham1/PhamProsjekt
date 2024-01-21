import React, { useState } from 'react';
import './taskList.css';

const TaskList = () => {
  // State-variabler for å håndtere oppgavelisten, fullførte oppgaver og inntastet oppgavetekst
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

   // Funksjon for å legge til en ny oppgave i oppgavelisten
  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
    setTaskInput('');
  };

  
  // Funksjon for å slette en oppgave fra oppgavelisten
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };


   // Funksjon for å slette en fullført oppgave fra listen over fullførte oppgaver
  const deleteCompletedTask = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
  };


   // Funksjon for å bytte status (fullført) for en oppgave
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    completedTask.completed = !completedTask.completed;

    // Sjekk om oppgaven er markert som fullført
    if (completedTask.completed) {
       // Hvis fullført, legg den til i completedTasks-arrayet
      setCompletedTasks([...completedTasks, completedTask]);
    } 

     // Oppdater oppgavelisten med den modifiserte newTasks-arrayen
    setTasks(newTasks);
  };


  // JSX som returneres av komponenten, inkludert skjema og lister for oppgaver
  return (
    <div id="app">
      <h1>Gjøremål</h1>
       {/* Skjema for å legge til nye oppgaver */}
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
       {/* Liste over ufullførte oppgaver */}
      <h3>Ugjennomførte oppgaver:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Slett
            </button>
            {!task.completed && (
        <button onClick={() => toggleComplete(index)} className="toggle-btn">
          Fullført
        </button>
      )}
          </li>
        ))}
      </ul>
      <div>
         {/* Liste over fullførte oppgaver */}
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
