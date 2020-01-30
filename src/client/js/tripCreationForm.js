import Trip from './trip'

// Create the trip creation form
class TripCreationForm extends Trip {
  constructor(elementId) {
    super()
    this.formCreationNode = document.getElementById(elementId)
    this.formCreationContainerNode = null
    this.closeFormContainerNode = null
    this.saveFormContainerNode = null
    this.cityInputNode = null
    this.startDateInputNode = null
    this.endDateInputNode = null
    this.countryCodeInputNode = null
    this.formCreationErrorMessageNode = null
  }

  get getFormCreationNode() {
    return this.formCreationNode
  }

  get getFormCreationContainerNode() {
    return this.formCreationContainerNode
  }

  get getCloseFormContainerNode() {
    return this.closeFormContainerNode
  }

  get getSaveFormContainerNode() {
    return this.saveFormContainerNode
  }

  get getCityInputNode() {
    return this.cityInputNode
  }

  get getCountryCodeInputNode() {
    return this.countryCodeInputNode
  }

  get getStartDateInputNode() {
    return this.startDateInputNode
  }

  get getEndDateInputNode() {
    return this.endDateInputNode
  }

  get getFormCreationErrorMessageNode() {
    return this.formCreationErrorMessageNode
  }

  // Initialization trip creation form
  formCreationInit() {
    this.formCreationContainer()
    this.formCreationHeading()
    this.formCreationCityInput()
    this.formCreationDateInput()
  }

  // Add the container
  formCreationContainer() {
    const formContainerContent = `
      <div class="form-creation-trip container-fluid" id="formCreationContainer"></div>`
    this.formCreationNode.insertAdjacentHTML('afterbegin', formContainerContent)
    // Create container node
    this.formCreationContainerNode = document.getElementById(
      'formCreationContainer'
    )
  }

  formCreationErrorMessage(errorMessage) {
    const formErrorMessage = `
      <div class="form-creation-trip_error" id="formCreationErrorMessage">${errorMessage}</div>
    `
    this.formCreationContainerNode.insertAdjacentHTML(
      'afterbegin',
      formErrorMessage
    )
    this.formCreationErrorMessageNode = document.getElementById(
      'formCreationErrorMessage'
    )
  }

  // Add the heading for the trip creation form
  formCreationHeading() {
    const formHeading = `
      <div class="row d-flex justify-content-between align-items-center form-creation-trip_heading">
        <div class="form-creation-trip_close-icon" id="formCreationClose">
          <i class="fas fa-arrow-left"></i>
          <span>Back</span>
        </div>
        <h3 class="form-creation-trip_heading-title">Plan your trip</h3>
        <div class="form-creation-trip_save-icon" id="formCreationSave">
          <i class="far fa-save"></i>
          <span>Save</span>
        </div>
      </div>
    `
    this.formCreationContainerNode.insertAdjacentHTML('afterbegin', formHeading)
    // Create close node
    this.closeFormContainerNode = document.getElementById('formCreationClose')
    // Create save node
    this.saveFormContainerNode = document.getElementById('formCreationSave')
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
        <div class="col-12 col-sm-12 col-md-5 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="text" id="city" placeholder="City" />
          <input type="text" id="countryCode" placeholder="Country code" />
        </div>
      </div>
    `
    this.formCreationContainerNode.insertAdjacentHTML('beforeend', formStepCity)
    // City input node
    this.cityInputNode = document.getElementById('city')
    // Country code input node
    this.countryCodeInputNode = document.getElementById('countryCode')
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
          <label for="startDate">Enter the Start date</label>
        </div>
        <div class="col-12 col-sm-12 col-md-5 d-flex flex-column justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="date" id="startDate" min="${today}" value="${today}" />
        </div>
      </div>
      <div class="row form-creation-trip_step">
        <div class="col-12 col-sm-12 col-md-5 d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-heading">
          <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="fas fa-calendar"></i>
          </div>    
          <label for="endDate">Enter the End date</label>
        </div>
        <div class="col-12 col-sm-12 col-md-5 d-flex flex-column justify-content-center justify-content-sm-center justify-content-md-start align-items-center form-creation-trip_step-input">
          <input type="date" id="endDate" min="${this.startDate}" value="${today}" />
        </div>
      </div>
    `
    this.formCreationContainerNode.insertAdjacentHTML('beforeend', formStepDate)
    // Start date input node
    this.startDateInputNode = document.getElementById('startDate')
    // End date input node
    this.endDateInputNode = document.getElementById('endDate')
  }
}

export default TripCreationForm
