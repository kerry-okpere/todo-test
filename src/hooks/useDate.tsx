export const useTodayDate = (date: Date = new Date()) => {
  let timeOfDay
  const today = new Date(date)

  const day = today.getDate()
  const hours = today.getHours()
  const dayName = today.toLocaleString('default', { weekday: 'long' })
  const month = today.toLocaleString('default', { month: 'short' })

  if (hours < 12) timeOfDay = 'morning'
  if (hours >= 12 && hours <= 17) timeOfDay = 'afternoon'
  timeOfDay = 'evening'

  return {
    dayName,
    month,
    day,
    timeOfDay,
  }
}
