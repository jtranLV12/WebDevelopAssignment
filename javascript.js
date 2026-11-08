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
    // 2. Add classes to style it based on its priority status
    // 3. Populate its textContent or innerHTML with values
    // 4. Return the completed element node
}

// ==========================================================================
// Part 3, Step 2 & 3: FORM SUBMIT EVENT HANDLER
// Handles intercepting form submissions, running clean string validations,
// and triggering the addition of new data items to the page layout.
// ==========================================================================
function handleFormSubmit(event) {
    // 1. Prevent default reload behavior
    
    // 2. Extract input values and run .trim() on text values
    
    // 3. Clear any existing error messages from previous inputs
    
    // 4. Validation Check: Verify text field isn't empty or blank spaces
    //    If invalid, show error message to user and exit function early.
    
    // 5. Generate a new element using your creation function
    
    // 6. Append the new item to the main list container block
    
    // 7. Reset the input field form back to clean default states
}

// Attach the listener execution code to the form element node block
taskForm.addEventListener("submit", handleFormSubmit);

// ==========================================================================
// Feature B: DASHBOARD CUSTOMIZATION (OPTIONAL / EXTENSION)
// Write your implementation logic for theme toggling or custom greeting here.
// ==========================================================================
