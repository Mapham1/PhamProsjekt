document.addEventListener('DOMContentLoaded', function () {
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('displayTasks');


taskForm.addEventListener('submit', function (event) {

    event.preventDefault(); //
    // Kaller på addTask funksjonen med en verdi fra taskInput  
    addTask(taskInput.value);
    taskInput.value = ''; // Fjerner eksisterende tekst fra inputen


});


function deleteTask(taskItem) {

    //Funksjon for å slette en oppgave fra visOppgaver
    displayTasks.removeChild(taskItem);
}

taskList.addEventListener('click', function (event) {

    //Kaller på deleteTask med en forelder node direkte
    deleteTask(event.target.parentNode);

});




});


function addTask(taskText) {

    //Lager en ny liste med elementer
    const taskItem = document.createElement('li');

    //Setter innhold til teksten av LI til taskText
    taskItem.textContent = taskText;

    // Opprett delete-knappen
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Slett'; //Det som skal stå inni boksen/knappen

    deleteButton.classList.add('delete-btn');  // Legg til en klasse for styling i css

    // Legg til delete-knappen i oppgaveelementet
    taskItem.appendChild(deleteButton);

    // Legger til det nye oppgave elementet i oppgavelisten
    displayTasks.appendChild(taskItem);

}