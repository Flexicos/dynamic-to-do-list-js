// Ensure the script runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Select DOM Elements ---
    const addButton = document.getElementById('add-task'); // "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field
    const taskList = document.getElementById('task-list'); // UL for tasks

    // --- Function to Add a Task ---
    // Accepts taskText and a flag indicating whether to save to Local Storage
    function addTask(taskText, save = true) {
        taskText = taskText.trim(); // Trim whitespace

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Assign onclick event to remove the task
        removeBtn.onclick = () => {
            taskList.removeChild(li);

            // Remove task from Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const index = storedTasks.indexOf(taskText);
            if (index > -1) {
                storedTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        };

        // Append remove button and li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field if this task was added via user input
        if (save) taskInput.value = '';

        // Save to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // --- Function to Load Tasks from Local Storage ---
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving
    }

    // --- Attach Event Listeners ---

    // Add task when the button is clicked
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add task when Enter key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();

});
