class Trip {
  constructor(elementId) {
    this.formCreationAppend = document.getElementById(elementId)
    this.formCreationContainerAppend = null
    this.formCreationNavigatorAppend = null
    this.formCreationStepAppend = null
    this.formCreationStepValue = 0
  }

  // Initialization trip creation form
  formCreationInit() {
    this.formCreationContainer()
    this.closeFormCreationContainer()
    this.formCreationHeading()
    this.formCreationNavigator()
    this.formCreationStep()
  }

  get formCreationContainerNode() {
    return this.formCreationContainerAppend
  }

  get formCreationNavigatorNode() {
    return this.formCreationNavigatorAppend
  }

  get formCreationStepNode() {
    return this.formCreationStepAppend
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

    // Close node
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

  // Add navigator for the steps of the trip creation form
  formCreationNavigator() {
    const formNavigator = `
      <div class="row form-creation-trip_navigator d-flex justify-content-between align-itmes-center" id="formCreationNavigator">
        <div id="back">
          <i class="fas fa-arrow-left"></i>
        </div>
        <div class="form-creation-trip_navigator-status d-flex justify-content-center align-items-center"></div>
        <div id="next">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    `
    this.formCreationContainerAppend.insertAdjacentHTML(
      'beforeend',
      formNavigator
    )

    // Navigator node
    this.formCreationNavigatorAppend = document.getElementById(
      'formCreationNavigator'
    )
  }

  // Clear the trip creation form navigator
  clearFormCreationNavigator() {
    this.formCreationContainerAppend.removeChild(
      this.formCreationNavigatorAppend
    )
  }

  // Clear the trip creation form step template
  clearFormCreationStep() {
    this.formCreationContainerAppend.removeChild(this.formCreationStepAppend)
  }

  // Add the step template for the trip creation form
  formCreationStep() {
    const formStepCity = `
      <div class="row form-creation-trip_step" id="formCreationStepAppend">
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

    const formStepDate = `
      <div class="row form-creation-trip_step" id="formCreationStepAppend">
        <div class="col-12 d-flex justify-content-center align-items-center form-creation-trip_step-heading">
          <div id="test" class="form-creation-trip_step-heading-icon d-flex justify-content-center align-items-center">
            <i class="far fa-calendar"></i>
          </div>    
          <label for="city">Enter the start date</label>
        </div>
        <div class="col-12 d-flex flex-column justify-content-center align-items-center form-creation-trip_step-input">
          <input type="text" id="city"/>
        </div>
      </div>
    `

    switch (this.formCreationStepValue) {
      case 0:
        this.formCreationContainerAppend.insertAdjacentHTML(
          'beforeend',
          formStepCity
        )
        break
      case 1:
        this.formCreationContainerAppend.insertAdjacentHTML(
          'beforeend',
          formStepDate
        )
        break
      default:
        break
    }

    // Step node
    this.formCreationStepAppend = document.getElementById(
      'formCreationStepAppend'
    )
  }
}

export default Trip
