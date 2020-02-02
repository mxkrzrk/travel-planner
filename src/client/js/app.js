import Trip from './trip'
import TripCreationForm from './tripCreationForm'
import TripList from './tripList'

const tripListHandler = () => {
  // Clear Trip List
  document.getElementById('tripList').innerHTML = ''
  // Load the data from local storage
  const tripList = new Trip()
  tripList.loadLocalStorage()
  // If list not empty create the Trip List box
  if (tripList.tripInfoList.length > 0) {
    const tripListInfo = new TripList('tripList')
    tripList.tripInfoList.forEach(el => {
      tripListInfo.tripListContainer()
      tripListInfo.tripListTitleBox(
        el.city,
        el.country,
        el.cityPhotoUrl,
        el.temperatureMax,
        el.temperatureMin,
        el.forecastSummary
      )
      tripListInfo.tripListDateBox(
        el.id,
        el.startDate,
        el.endDate,
        el.travelLength
      )
    })
  }
}

// Remove a Trip from list
const removeTripHandler = e => {
  const tripId = e.target.dataset.tripid
  if (tripId) {
    Trip.deleteTripLocalStorage(tripId)
    tripListHandler()
  }
}

const tripCreationFormHandler = () => {
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
    document.querySelector('body').style.overflowY = 'scroll'
  })
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      tripCreation.getFormCreationNode.innerHTML = ''
      document.querySelector('body').style.overflowY = 'scroll'
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
          document.querySelector('body').style.overflowY = 'scroll'
          tripCreation.saveLocalStorage()
        })
        .then(() => {
          // Clear List
          document.getElementById('tripList').innerHTML = ''
          tripListHandler()
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

export default { tripListHandler, removeTripHandler, tripCreationFormHandler }
