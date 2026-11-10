// ==========================================================================
// Part 3, Step 1: DOM ELEMENT SELECTION
// Explicitly select all required HTML components using descriptive variables.
// ==========================================================================
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskPrioritySelect = document.getElementById("task-priority");
const taskListContainer = document.getElementById("task-list");
const errorDisplay = document.getElementById("error-message");

// ==========================================================================
// Part 3, Step 4 & 5: ELEMENT CREATION FUNCTION
// This function should accept data parameters, construct a brand new 
// DOM element tree, apply appropriate classes, and return it.
// ==========================================================================
function createTaskElement(taskName, priority) {
    // 1. Create the parent container tag (e.g., 'li')
    const li = document.createElement("li");
    // 2. Add classes to style it based on its priority status
    li.classList.add("task-item", `priority-${priority}`);
    // 3. Populate its textContent or innerHTML with values
    li.textContent = taskName;
    // 4. Return the completed element node
    return li;
}

// ==========================================================================
// Part 3, Step 2 & 3: FORM SUBMIT EVENT HANDLER
// Handles intercepting form submissions, running clean string validations,
// and triggering the addition of new data items to the page layout.
// ==========================================================================
function handleFormSubmit(event) {
    // 1. Prevent default reload behavior
    event.preventDefault();
    // 2. Extract input values and run .trim() on text values
    const text = taskNameInput.value.trim();
    const priority = taskPrioritySelect.value;
    // 3. Clear any existing error messages from previous inputs
    errorDisplay.textContent = "";
    // 4. Validation Check: Verify text field isn't empty or blank spaces
    //    If invalid, show error message to user and exit function early.
    if (text === "") {
        errorDisplay.textContent = "Please enter a task";
        return;
    }
    // 5. Generate a new element using your creation function
    const newTaskElement = createTaskElement(text, priority);
    // 6. Append the new item to the main list container block
    taskListContainer.appendChild(newTaskElement);
    // 7. Reset the input field form back to clean default states
    taskForm.reset();
}

// Attach the listener execution code to the form element node block
taskForm.addEventListener("submit", handleFormSubmit);

// ==========================================================================
// Feature B: DASHBOARD CUSTOMIZATION (OPTIONAL / EXTENSION)
// Write your implementation logic for theme toggling or custom greeting here.
// ==========================================================================
const toggleBtn = document.querySelector('#theme-toggle');

toggleBtn.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on <body>
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    if (isDarkMode) {
        toggleBtn.textContent = 'Light Mode';
    } else {
        toggleBtn.textContent = 'Dark Mode';
    }
});