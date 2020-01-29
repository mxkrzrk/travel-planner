// Create the trip
class Trip {
  constructor() {
    this.city = ''
    this.startDate = ''
    this.endDate = ''
  }

  set setCity(city) {
    this.city = city.trim()
  }

  get getCity() {
    return this.city
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
}

export default Trip
