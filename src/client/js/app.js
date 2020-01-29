import TripCreationForm from './tripCreationForm'

const geonamesApiUrl = 'http://api.geonames.org/searchJSON?'
const geonamesApiUsername = 'massimilianok'

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
    // Check if the inputs are empty
    if (
      tripCreation.getCityInputNode.value !== '' &&
      tripCreation.getCountryCodeInputNode.value !== '' &&
      tripCreation.getStartDateInputNode.value !== '' &&
      tripCreation.getEndDateInputNode.value !== ''
    ) {
      // Get all input value
      tripCreation.setCity = tripCreation.getCityInputNode.value
      tripCreation.setCountryCode = tripCreation.getCountryCodeInputNode.value
      tripCreation.setStartDate = tripCreation.getStartDateInputNode.value
      tripCreation.setEndDate = tripCreation.getEndDateInputNode.value
      tripCreation
        .fetchParamCity(geonamesApiUrl, geonamesApiUsername)
        .then(res => {
          console.log(res)
          console.log(tripCreation)
        })
        .catch(error => console.error('Error:', error))
    } else {
      console.log('All input are required!')
    }
  })
}

export default tripCreationForm
