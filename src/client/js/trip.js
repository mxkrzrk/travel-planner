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
  }

  set setCity(city) {
    this.city = city.trim().toLowerCase()
  }

  get getCity() {
    return this.city
  }

  set setCountryCode(countryCode) {
    this.countryCode = countryCode.trim().toLowerCase()
  }

  get getCountryCode() {
    return this.countryCode
  }

  get getCountry() {
    return this.country
  }

  set setStartDate(startDate) {
    this.startDate = startDate
  }

  get getStartDate() {
    return this.startDate
  }

  set setEndDate(endDate) {
    this.endDate = endDate
  }

  get getEndDate() {
    return this.endDate
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
    return cityObj
  }
}

export default Trip
