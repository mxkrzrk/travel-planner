import Trip from './trip'
import TripCreationForm from './tripCreationForm'

const tripCreationForm = () => {
  // Fetch APIs credential
  const geonamesApiUrl = 'http://api.geonames.org/searchJSON?'
  let geonamesApiUsername = ''
  const darkskyApiUrl = 'https://api.darksky.net/forecast'
  let darkskyApiKey = ''
  const pixabayUrl = 'https://pixabay.com/api/'
  let pixabayApiKey = ''
  Trip.fetchApiKeys().then(res => {
    geonamesApiUsername = res.geonamesApiUsername
    darkskyApiKey = res.darkskyApiKey
    pixabayApiKey = res.pixabayApiKey
  })

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

  // Add listener for change End Date related to start date
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
    // Clear error message
    if (tripCreation.getFormCreationErrorMessageNode) {
      tripCreation.getFormCreationContainerNode.removeChild(
        tripCreation.getFormCreationErrorMessageNode
      )
    }
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
        .then(() => tripCreation.fecthCityPhoto(pixabayUrl, pixabayApiKey))
        .then(() => {
          tripCreation.getFormCreationNode.removeChild(
            tripCreation.getFormCreationContainerNode
          )
          tripCreation.saveLocalStorage()
        })
        .catch(() =>
          tripCreation.formCreationErrorMessage(
            'Something went wrong try again later!'
          )
        )
    } else {
      tripCreation.formCreationErrorMessage('All fields are required!')
    }
  })
}

export default { tripCreationForm }
