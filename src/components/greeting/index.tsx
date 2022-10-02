import { useTodayDate } from '@hooks/useDate'
import { StyleHeading, StyleSubHeading, StyledHeader } from './styles'

export const Greeting = () => {
  const { dayName, month, day, timeOfDay } = useTodayDate(new Date())
  const emoji =
    timeOfDay === 'morning' ? '⛅' : timeOfDay === 'afternoon' ? '☀️' : '🌒'

  return (
    <StyledHeader>
      <StyleHeading data-testid="greeting-text">
        {emoji} Good {timeOfDay}!
      </StyleHeading>
      <StyleSubHeading>
        It&apos;s {`${dayName}, ${month} ${day}`}
      </StyleSubHeading>
    </StyledHeader>
  )
}
