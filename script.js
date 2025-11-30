// Ensure code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Select DOM Elements ---
    const addButton = document.querySelector('.add-task-btn'); // Add Task button (class selector)
    const taskInput = document.getElementById('task-input');    // Task input field
    const taskList = document.getElementById('task-list');      // UL to display tasks

    // --- Function to Add a Task ---
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user if empty
            return; // Exit function
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // Add class using classList.add

        // Remove task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to list item and list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field for next task
        taskInput.value = '';
    }

    // --- Attach Event Listeners ---

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
