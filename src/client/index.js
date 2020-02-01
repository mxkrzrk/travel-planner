import App from './js/app'
import './styles/index.scss'

window.addEventListener('load', App.tripList)

const addTripButton = document.getElementById('addTripPlan')
addTripButton.addEventListener('click', App.tripCreationForm)
