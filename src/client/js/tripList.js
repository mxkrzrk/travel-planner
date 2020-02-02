import Trip from './trip'
import { getToday, getTravelLenght } from './helper'

class TripList extends Trip {
  constructor(elementID) {
    super()
    this.tripListNode = document.getElementById(elementID)
    this.tripListContainerNode = null
  }

  tripListContainer() {
    const tripListContainerContent = `
      <div class="row list-trip_container" id="tripListContainer"></div>
    `
    this.tripListNode.insertAdjacentHTML('afterbegin', tripListContainerContent)
    this.tripListContainerNode = document.getElementById('tripListContainer')
  }

  tripListTitleBox(
    cityName,
    countryName,
    cityPhotoUrl,
    tempMax,
    tempMin,
    tempSummary
  ) {
    const tripListTitleBoxContent = `
      <div class="col-12 col-sm-12 col-md-6 p-0">
        <div class="list-trip_title">
          <div class="list-trip_title-text">
            <h2>${cityName.toUpperCase()}</h2>
            <h3>${countryName}</h3>
          </div>
          <div class="list-trip_title-image">
            <img
              class="list-trip_title-image-photo"
              src="${cityPhotoUrl}"
              alt="City photo"
            />
            <div class="list-trip_title-image-photo--overlay"></div>
          </div>
          <div class="list-trip_title-forecasts">
            <h4>Typical weather for then:</h4>
            <div class="d-flex justify-content-start align-items-center">
              <div>
                <i class="fas fa-temperature-high"></i>
                <span>${tempMax === 'undefined' ? 'n/a' : tempMax}</span>
              </div>
              <div>
                <i class="fas fa-temperature-low"></i>
                <span>${tempMin === 'undefined' ? 'n/a' : tempMin}</span>
              </div>
              <div class="d-flex">
                <span>${
                  tempSummary === 'undefined' ? 'n/a' : tempSummary
                }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    this.tripListContainerNode.insertAdjacentHTML(
      'afterbegin',
      tripListTitleBoxContent
    )
  }

  tripListDateBox(startDate, endDate, lenght) {
    const today = getToday()
    const countdown = getTravelLenght(today, endDate)
    const tripListDateBoxContent = `
      <div class="col-12 col-sm-12 col-md-6 p-0">
        <div class="list-trip_date">
          <div
            class="list-trip_date-button d-flex justify-content-end align-items-center"
          >
            <button class="d-flex justify-content-center align-items-center">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="list-trip_date-calendar">
            <i class="far fa-calendar"></i>
            <span>Departure day</span>
            <span class="list-trip_date-calendar-highlight">${startDate}</span>
          </div>
          <div class="list-trip_date-calendar">
            <i class="fas fa-calendar"></i>
            <span>Arrival day</span>
            <span class="list-trip_date-calendar-highlight"
              >${endDate}</span
            >
          </div>
          <div class="list-trip_date-calendar">
            <i class="fas fa-business-time"></i>
            <span>Travel time</span>
            <span class="list-trip_date-calendar-highlight">${lenght}</span>
            <span>Days</span>
          </div>
          <div class="list-trip_date-calendar">
            <i class="far fa-clock"></i>
            <span class="list-trip_date-calendar-highlight">${
              countdown < 0 ? 0 : countdown
            }</span>
            <span>days away</span>
          </div>
         
        </div>
      </div>
      `
    this.tripListContainerNode.insertAdjacentHTML(
      'beforeend',
      tripListDateBoxContent
    )
  }
}

export default TripList
