import TripCreationForm from './tripCreationForm'

const tripCreationForm = () => {
  // Create the trip creation form
  const tripCreation = new TripCreationForm('tripCreationForm')
  tripCreation.formCreationInit()
  // Add listeners for close the trip creation form
  tripCreation.getCloseFormContainerNode.addEventListener('click', () => {
    tripCreation.getFormCreationNode.removeChild(
      tripCreation.getFormCreationContainerNode
    )
  })
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      tripCreation.getFormCreationNode.innerHTML = ''
    }
  })
  // Add listener for save the date in the form
  tripCreation.getSaveFormContainerNode.addEventListener('click', () => {
    if (
      tripCreation.getCityInputNode.value !== '' &&
      tripCreation.getStartDateInputNode.value !== '' &&
      tripCreation.getEndDateInputNode.value !== ''
    ) {
      tripCreation.setCity = tripCreation.getCityInputNode.value
      tripCreation.setStartDate = tripCreation.getStartDateInputNode.value
      tripCreation.setEndDate = tripCreation.getEndDateInputNode.value
      console.log(tripCreation)
    } else {
      console.log('City required')
    }
  })
}

export default tripCreationForm
