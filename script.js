// Ensure the script runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Select DOM Elements ---
    // "Add Task" button
    const addButton = document.getElementById('add-task');

    // Input field where users enter tasks
    const taskInput = document.getElementById('task-input');

    // Unordered list to display the tasks
    const taskList = document.getElementById('task-list');

    // --- Function to Add a Task ---
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Validate input: check if it's empty
        if (taskText === "") {
            alert("Please enter a task."); // Prompt user if input is empty
            return; // Exit the function if validation fails
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove the task from the list
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the remove button to the list item
        li.appendChild(removeBtn);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field for the next task
        taskInput.value = '';
    }

    // --- Attach Event Listeners ---

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
