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
let patients = null

// -------------------------------
// startup
// -------------------------------
window.addEventListener('load', function() {
    Object.keys(localStorage).forEach(i => {
        const patientObject = JSON.parse(localStorage.getItem(i))
        addPatientToPage(patientObject)   
    })
});



// -------------------------------
// Helper Functions
// -------------------------------
function clearErrors() {
    // TODO: Clear all error message elements
    nameError.innerText = ""
    ageError.innerText = ""
    symptomsError.innerText = ""
}

function clearPatientDetails() {
    const currentNameUL = document.getElementById("patient-details-name")
    const currentAgeUL = document.getElementById("patient-details-age")
    const currentSymptomsUL = document.getElementById("patient-details-symptoms")

    currentNameUL.innerHTML = ""
    currentAgeUL.innerHTML = ""
    currentSymptomsUL.innerHTML = ""
}

function validateForm(name, age, symptoms) {
    let isValid = true; 
    
    // TODO: Clear errors first using the above function
    clearErrors()

    // TODO: Validate name (cannot be empty)
    if(!name || name.trim().length === 0) {
        isValid = false
        nameError.innerText = "Name cannot be empty!"
    }

    // TODO: Validate age (must be between 1–120)
    if(!age || age < 1 || age > 120){
        isValid = false
        ageError.innerText = "Age must be between 1-120!"
    }

    // TODO: Validate symptoms (cannot be empty)
    if(!symptoms || symptoms.trim().length === 0){
        isValid = false
        symptomsError.innerText = "Symptoms cannot be empty!"
    }

    return isValid
}

// not used
function addPatientsToPage() {
    Object.keys(localStorage).forEach(i => {
        const patientObject = JSON.parse(localStorage.getItem(i))

        const newListItem = document.createElement("li")
        newListItem.classList.add("patient")
        newListItem.dataset.patientId = patientObject.id
        newListItem.appendChild(document.createTextNode(`${patientObject.name}`))
        
        patientList.appendChild(newListItem)
  })
}

function addPatientToPage({id, name, age, symptoms}) {
    const newListItem = document.createElement("li")
    const newListButton = document.createElement("button")
    newListButton.innerText = "delete"
    newListButton.addEventListener("click", onDeleteClick)
    
    newListItem.classList.add("patient")
    newListItem.addEventListener("click", onPatientSelect)
    newListItem.dataset.patientId = id
    newListItem.appendChild(document.createTextNode(`${name}`))
    newListItem.appendChild(newListButton)
    
    patientList.appendChild(newListItem)
}

function addPatientToStorage(name, age, symptoms) {
    // TODO: Create a list item and append to the patient list
    const index = crypto.randomUUID()

    const patientObject = {
        id: index,
        name: name,
        age: age,
        symptoms: symptoms
    }

    localStorage.setItem(index, JSON.stringify(patientObject))
    return patientObject
}

// Add patient item function for displaying data
function onPatientSelect(event) {
    // Prevent function from running if "delete" button is clicked
    if(event.target.nodeName === "BUTTON") return

    const currentPatient = JSON.parse(localStorage.getItem(event.target.dataset.patientId))
    const currentNameUL = document.getElementById("patient-details-name")
    const currentAgeUL = document.getElementById("patient-details-age")
    const currentSymptomsUL = document.getElementById("patient-details-symptoms")

    // Reset Patient Details
    clearPatientDetails()

    const patientName = document.createElement("li")
    patientName.appendChild(document.createTextNode(`${currentPatient.name}`))
    currentNameUL.appendChild(patientName)

    const patientAge = document.createElement("li")
    patientAge.appendChild(document.createTextNode(`${currentPatient.age}`))
    currentAgeUL.appendChild(patientAge)

    const patientSymptoms = document.createElement("li")
    patientSymptoms.appendChild(document.createTextNode(`${currentPatient.symptoms}`))
    currentSymptomsUL.appendChild(patientSymptoms)
}

function onDeleteClick(event) {
    const patientLi = event.target.parentElement
    const id = patientLi.dataset.patientId
    localStorage.removeItem(id)
    clearPatientDetails()
    patientLi.remove()
}

// -------------------------------
// Main Form Handler - This handles form submission
// -------------------------------

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameValue = nameInput.value;
    const ageValue = parseInt(ageInput.value);
    const symptomsValue = symptomsInput.value;

    // TODO: Call validateForm
    const isValid = validateForm(nameValue, ageValue, symptomsValue)
    
    // TODO: If the form is not valid, stop the function
    if(!isValid) {
        console.error("form invalid!")
        return
    }
    
    // TODO: If valid, add patient to the list
    const newPatient = addPatientToStorage(nameValue, ageValue, symptomsValue)
    addPatientToPage(newPatient)

    // TODO: Clear input fields after successful submission
    form.reset()
});