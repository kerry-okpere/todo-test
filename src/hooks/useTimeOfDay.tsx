export const useTimeOfDay = () => {
  const today = new Date()
  const hours = today.getHours()

  if (hours < 12) return 'morning'
  if (hours >= 12 && hours <= 17) return 'afternoon'
  return 'evening'
}
