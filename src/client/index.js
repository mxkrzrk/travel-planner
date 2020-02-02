import App from './js/app'
import './styles/index.scss'

// Load the Trip List
window.addEventListener('load', App.tripListHandler)

// Create the Trip plan
const addTripButton = document.getElementById('addTripPlan')
addTripButton.addEventListener('click', App.tripCreationFormHandler)

// Delete a Trip plan
const removeTrip = document.getElementById('tripList')
removeTrip.addEventListener('click', App.removeTripHandler)
