// Ensure code runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Select DOM Elements ---
    const addButton = document.querySelector('.add-task-btn'); // Add Task button (class selector)
    const taskInput = document.getElementById('task-input');    // Task input field
    const taskList = document.getElementById('task-list');      // UL to display tasks

    // --- Load Tasks from Local Storage ---
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents saving again
    }

    // --- Function to Add a Task ---
    // `save` flag indicates whether to save to Local Storage (false when loading)
    function addTask(taskText, save = true) {
        taskText = taskText.trim();

        if (taskText === "") {
            if (save) alert("Please enter a task."); // Alert only for user input
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Remove task from DOM and Local Storage when clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);

            // Update Local Storage
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

    // --- Attach Event Listeners ---

    // Add task when the "Add Task" button is clicked
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
