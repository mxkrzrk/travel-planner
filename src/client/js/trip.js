class Trip {
  constructor(elementId) {
    this.elementIdTarget = document.getElementById(elementId)
    this.elementIdContainer = null
  }

  formCreationInit() {
    this.formCreationContainer()
    this.closeFormCreationContainer()
    this.formCreationHeading()
    this.formCreationStep()
  }

  // Create the container for the trip creation form
  formCreationContainer() {
    const formContainerContent = `
      <div class="form-creation-trip container-fluid" id="formCreationContainer">
      </div>
    `

    this.elementIdTarget.insertAdjacentHTML('afterbegin', formContainerContent)
    this.elementIdContainer = document.getElementById('formCreationContainer')
  }

  // Add close button for the trip creation form
  closeFormCreationContainer() {
    const closeFormContent = `
      <div class="form-creation-trip_close-icon" id="formCreationClose"><i class="fas fa-times"></i></div>
    `
    this.elementIdContainer.insertAdjacentHTML('afterbegin', closeFormContent)

    const closeFormContainer = document.getElementById('formCreationClose')

    closeFormContainer.addEventListener('click', () => {
      this.elementIdTarget.innerHTML = ''
    })

    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.elementIdTarget.innerHTML = ''
      }
    })
  }

  // Create the heading for the trip creation form
  formCreationHeading() {
    const formHeading = `
      <div class="row d-flex justify-content-center align-items-center form-creation-trip_heading">
        <h2 class="form-creation-trip_heading-title">Plan your trip</h2>
      </div>
    `

    this.elementIdContainer.insertAdjacentHTML('afterbegin', formHeading)
  }

  // Create the step template for the trip creation form
  formCreationStep() {
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

    this.elementIdContainer.insertAdjacentHTML('beforeend', formStep)
  }
}

export default Trip
