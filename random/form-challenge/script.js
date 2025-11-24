// -------------------------------
// Patient Registration Script
// -------------------------------

// Grab form elements
const form = document.getElementById("patient-form");

const nameInput = document.getElementById("patient-name");
const ageInput = document.getElementById("patient-age");
const symptomsInput = document.getElementById("patient-symptoms");

const nameError = document.getElementById("name-error");
const ageError = document.getElementById("age-error");
const symptomsError = document.getElementById("symptoms-error");

const patientList = document.getElementById("patients");


// -------------------------------
// Helper Functions
// -------------------------------

function clearErrors() {
    // TODO: Clear all error message elements
}

function validateForm(name, age, symptoms) {
    let isValid = true; // Use this variable to track validity
    // TODO: Clear errors first using the above function
    // TODO: Validate name (cannot be empty)
    // TODO: Validate age (must be between 1–120)
    // TODO: Validate symptoms (cannot be empty)
    // TODO: Return isValid
}

function addPatientToList(name, age, symptoms) {
    // TODO: Create a list item and append to the patient list
}


// -------------------------------
// Main Form Handler - This handles form submission
// -------------------------------

form.addEventListener("submit", function (event) {
    event.preventDefault(); // This prevents the default form submission and lets us handle it with JavaScript

    const nameValue = nameInput.value;
    const ageValue = parseInt(ageInput.value);
    const symptomsValue = symptomsInput.value;

    // TODO: Call validateForm
    // TODO: If the form is not valid, stop the function
    // TODO: If valid, add patient to the list
    // TODO: Clear input fields after successful submission
});