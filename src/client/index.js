import App from './js/app'
import './styles/index.scss'

const addTripButton = document.getElementById('addTripPlan')
addTripButton.addEventListener('click', App.tripCreationForm)
