import { getTravelLenght } from './helper'

// Create the trip
class Trip {
  constructor() {
    this.city = ''
    this.countryCode = ''
    this.country = ''
    this.lng = ''
    this.lat = ''
    this.startDate = ''
    this.endDate = ''
    this.forecastSummary = ''
    this.forecastIcon = ''
    this.temperatureMax = ''
    this.temperatureMin = ''
    this.cityPhotoUrl = ''
    this.travelLength = ''
    this.tripInfoList = []
  }

  set setCity(city) {
    this.city = city.trim().toLowerCase()
  }

  set setCountryCode(countryCode) {
    this.countryCode = countryCode.trim().toLowerCase()
  }

  set setStartDate(startDate) {
    this.startDate = startDate
  }

  set setEndDate(endDate) {
    this.endDate = endDate
  }

  static async fetchApiKeys() {
    const response = await fetch('http://localhost:8000/api-credentials')
    const json = await response.json()
    return json
  }

  async fetchParamCity(url, username) {
    const response = await fetch(
      `${url}q=${this.city}&country=${this.countryCode}&maxRows=10&username=${username}`
    )
    const json = await response.json()
    const cityObj = json.geonames.find(
      el => el.name.toLowerCase() === this.city
    )
    this.lng = cityObj.lng
    this.lat = cityObj.lat
    this.country = cityObj.countryName
  }

  async fetchForecast(url, APIkey) {
    const date = new Date(this.startDate).getTime() / 1000
    const response = await fetch(
      `${url}/${APIkey}/${this.lat},${this.lng},${date.toString()}?units=si`
    )
    const json = await response.json()
    this.forecastSummary = json.daily.data[0].summary
    this.forecastIcon = json.daily.data[0].icon
    this.temperatureMax = Math.round(json.daily.data[0].temperatureMax)
    this.temperatureMin = Math.round(json.daily.data[0].temperatureMin)
  }

  async fecthCityPhoto(url, APIkey) {
    const response = await fetch(
      `${url}?key=${APIkey}&q=${this.city}&image_type=photo`
    )
    const json = await response.json()
    // Random photo
    const randomHits = Math.floor(Math.random(json.totalHits) * 10)
    this.cityPhotoUrl = json.hits[randomHits].largeImageURL
  }

  saveLocalStorage() {
    this.travelLength = getTravelLenght(this.startDate, this.endDate)

    const tripInfo = {
      id: Math.floor(Math.random() * 1000),
      city: this.city,
      country: this.country,
      startDate: this.startDate,
      endDate: this.endDate,
      forecastSummary: this.forecastSummary,
      forecastIcon: this.forecastIcon,
      temperatureMax: this.temperatureMax,
      temperatureMin: this.temperatureMin,
      cityPhotoUrl: this.cityPhotoUrl,
      travelLength: this.travelLength
    }
    const tripInfoList = JSON.parse(localStorage.getItem('tripList'))
    tripInfoList.push(tripInfo)
    localStorage.setItem('tripList', JSON.stringify(tripInfoList))
  }

  loadLocalStorage() {
    if (localStorage.getItem('tripList')) {
      this.tripInfoList = JSON.parse(localStorage.getItem('tripList'))
    } else {
      localStorage.setItem('tripList', JSON.stringify([]))
    }
  }

  static deleteTripLocalStorage(tripId) {
    const tripInfoList = JSON.parse(localStorage.getItem('tripList'))
    const tripIndex = tripInfoList.findIndex(el => el.id === tripId)
    tripInfoList.splice(tripIndex, 1)
    localStorage.setItem('tripList', JSON.stringify(tripInfoList))
  }
}

export default Trip
