// Ensure all code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task'); // "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field
    const taskList = document.getElementById('task-list'); // UL for tasks

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input

        if (taskText === "") {
            alert("Please enter a task."); // Prompt if input is empty
            return;
        }

        // Create a new task item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to li and li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // --- Event Listeners ---

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
