import { useTimeOfDay } from '@hooks/useTimeOfDay'

export const Greeting = () => {
  // TODO: make date reactive?

  const today = new Date()
  const period = useTimeOfDay()

  const dayName = today.toLocaleString('default', { weekday: 'long' })
  const month = today.toLocaleString('default', { month: 'short' })
  const day = today.getDate()

  return (
    <header>
      <h1>👋 Good {period}!</h1>
      <p>It&apos;s {`${dayName}, ${month} ${day}`}</p>
    </header>
  )
}
