import React from 'react';
import ReactDOM from 'react-dom/client';
import './taskList.css';
import TaskList from './TaskList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <TaskList />
  </React.StrictMode>
);

reportWebVitals();
x 