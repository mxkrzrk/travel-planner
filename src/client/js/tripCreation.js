// Create the container for the trip creation form
const formCreationContainer = () => {
  const formContainerContent = `
    <div class="form-creation-trip container-fluid" id="formCreationContainer">
      <div class="form-creation-trip_close-icon" id="formCreationClose"><i class="fas fa-times"></i></div>
    </div>
  `
  const formContainer = document.getElementById('tripCreationForm')
  formContainer.insertAdjacentHTML('afterbegin', formContainerContent)
}

// Close the trip creation form
const closeCreationContainer = () => {
  const closeFormContainer = document.getElementById('formCreationClose')
  const formContainer = document.getElementById('tripCreationForm')
  closeFormContainer.addEventListener('click', () => {
    formContainer.innerHTML = ''
  })
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      formContainer.innerHTML = ''
    }
  })
}

// Create the heading for the trip creation form
const formCreationHeading = () => {
  const formHeading = `
    <div class="row d-flex justify-content-center align-items-center form-creation-trip_heading">
      <h2 class="form-creation-trip_heading-title">Plan your trip</h2>
    </div>
  `
  const container = document.getElementById('formCreationContainer')
  container.insertAdjacentHTML('afterbegin', formHeading)
}

// Create the step template for the trip creation form
const formCreationStep = () => {
  const formStep = `
    <div class="row form-creation-trip_step">
      <div class="col-12 d-flex justify-content-center align-items-center form-creation-trip_step-heading">
        <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
          <i class="fas fa-map-marker-alt"></i>
        </div>    
        <label for="city">Enter the City</label>
      </div>
      <div class="col-12 d-flex flex-column justify-content-center align-items-center form-creation-trip_step-input">
        <input type="text" id="city"/>
      </div>
    </div>
  `
  const container = document.getElementById('formCreationContainer')
  container.insertAdjacentHTML('beforeend', formStep)
}

export {
  formCreationContainer,
  closeCreationContainer,
  formCreationHeading,
  formCreationStep
}
