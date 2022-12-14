export const useTodayDate = (date: Date = new Date()) => {
  let timeOfDay
  const today = new Date(date)

  const day = today.getDate()
  const hours = today.getHours()
  const dayName = today.toLocaleString('default', { weekday: 'long' })
  const month = today.toLocaleString('default', { month: 'short' })
  const year = today.getFullYear()

  if (hours < 12) timeOfDay = 'morning'
  else if (hours >= 12 && hours <= 17) timeOfDay = 'afternoon'
  else timeOfDay = 'evening'

  return {
    dayName,
    month,
    day,
    timeOfDay,
    year,
  }
}
