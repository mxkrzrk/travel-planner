const getToday = () => {
  // Get today date
  const date = new Date()
  const day = date.getDate()
  const dayDoubleDigit = day < 10 ? `0${day}` : day
  const mounth = date.getMonth() + 1
  const mounthDoubleDigit = mounth < 10 ? `0${mounth}` : mounth
  const fullYear = date.getFullYear()
  const todayDate = `${fullYear}-${mounthDoubleDigit}-${dayDoubleDigit}`

  return todayDate
}

const getTravelLenght = (startDate, endDate) => {
  const timeStart = new Date(startDate).getTime()
  const timeEnd = new Date(endDate).getTime()
  const timeDiff = timeEnd - timeStart
  const oneDayMs = 60 * 60 * 24 * 1000
  const timeLength = timeDiff / oneDayMs

  return timeLength
}

export { getToday, getTravelLenght }
