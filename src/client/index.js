import App from './js/app'
import './styles/app.scss'

const addTripButton = document.getElementById('addTripPlan')
addTripButton.addEventListener('click', App.tripCreationForm)
