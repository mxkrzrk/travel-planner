import TripCreationForm from './tripCreationForm'

const geonamesApiUrl = 'http://api.geonames.org/searchJSON?'
const geonamesApiUsername = 'massimilianok'

const darkskyApiUrl = 'https://api.darksky.net/forecast'
const darkskyApiKey = '131f950067414dded67a5dad8968a157'

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

  // Add listener for change end date related to start date
  tripCreation.getStartDateInputNode.addEventListener('change', () => {
    tripCreation.getEndDateInputNode.value =
      tripCreation.getStartDateInputNode.value
    tripCreation.getEndDateInputNode.setAttribute(
      'min',
      tripCreation.getStartDateInputNode.value
    )
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
      // Retrieve data from all APIs
      tripCreation
        .fetchParamCity(geonamesApiUrl, geonamesApiUsername)
        .then(() => tripCreation.fetchForecast(darkskyApiUrl, darkskyApiKey))
        .then(() => console.log(tripCreation))
        .catch(error => console.error('Error:', error))
    } else {
      console.log('All input are required!')
    }
  })
}

export default tripCreationForm
