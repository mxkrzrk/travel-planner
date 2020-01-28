class Trip {
  constructor(elementId) {
    this.formCreationAppend = document.getElementById(elementId)
    this.formCreationContainerAppend = null
  }

  // Initialization trip creation form
  formCreationInit() {
    this.formCreationContainer()
    this.closeFormCreationContainer()
    this.formCreationHeading()
    this.formCreationCityInput()
    this.formCreationDateInput()
  }

  // Add the container for the trip creation form
  formCreationContainer() {
    const formContainerContent = `
      <div class="form-creation-trip container-fluid" id="formCreationContainer">
      </div>
    `
    this.formCreationAppend.insertAdjacentHTML(
      'afterbegin',
      formContainerContent
    )

    // Container node
    this.formCreationContainerAppend = document.getElementById(
      'formCreationContainer'
    )
  }

  // Add close button for the trip creation form
  closeFormCreationContainer() {
    const closeFormContent = `
      <div class="form-creation-trip_close-icon" id="formCreationClose"><i class="fas fa-times"></i></div>
    `
    this.formCreationContainerAppend.insertAdjacentHTML(
      'afterbegin',
      closeFormContent
    )

    // Close the trip creation form
    const closeFormContainer = document.getElementById('formCreationClose')
    closeFormContainer.addEventListener('click', () => {
      this.formCreationAppend.removeChild(this.formCreationContainerAppend)
    })
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.formCreationAppend.innerHTML = ''
      }
    })
  }

  // Add the heading for the trip creation form
  formCreationHeading() {
    const formHeading = `
      <div class="row d-flex justify-content-center align-items-center form-creation-trip_heading">
        <h2 class="form-creation-trip_heading-title">Plan your trip</h2>
      </div>
    `
    this.formCreationContainerAppend.insertAdjacentHTML(
      'afterbegin',
      formHeading
    )
  }

  // Add city input for the trip creation form
  formCreationCityInput() {
    const formStepCity = `
      <div class="row form-creation-trip_step">
        <div class="col-12 col-sm-12 col-md-5 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-heading">
          <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-map-marker-alt"></i>
          </div>    
          <label for="city">Enter the City</label>
        </div>
        <div class="col-12 col-sm-12 col-md-5 d-flex flex-column justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="text" id="city"/>
        </div>
      </div>
    `
    this.formCreationContainerAppend.insertAdjacentHTML(
      'beforeend',
      formStepCity
    )
  }

  // Add date input for the trip creation form
  formCreationDateInput() {
    // Get today date
    const date = new Date()
    const day = date.getDate()
    const dayDoubleDigit = day < 10 ? `0${day}` : day
    const mounth = date.getMonth() + 1
    const mounthDoubleDigit = mounth < 10 ? `0${mounth}` : mounth
    const fullYear = date.getFullYear()
    const today = `${fullYear}-${mounthDoubleDigit}-${dayDoubleDigit}`

    const formStepDate = `
      <div class="row form-creation-trip_step">
        <div class="col-12 col-sm-12 col-md-5 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-heading">
          <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="far fa-calendar"></i>
          </div>    
          <label for="dateStart">Enter the Start date</label>
        </div>
        <div class="col-12 col-sm-12 col-md-5 d-flex flex-column justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="date" id="dateStart" min="${today}" value="${today}"/>
        </div>
      </div>
      <div class="row form-creation-trip_step">
        <div class="col-12 col-sm-12 col-md-5 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-heading">
          <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-calendar"></i>
          </div>    
          <label for="dateEnd">Enter the End date</label>
        </div>
        <div class="col-12 col-sm-12 col-md-5 d-flex flex-column justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="date" id="dateEnd" min="${today}" value="${today}"/>
        </div>
      </div>
    `
    this.formCreationContainerAppend.insertAdjacentHTML(
      'beforeend',
      formStepDate
    )
  }
}

export default Trip
