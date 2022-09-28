import { useTodayDate } from '@hooks/useDate'
import { StyleHeading, StyleSubHeading, StyledHeader } from './styles'

export const Greeting = () => {
  // TODO: make date reactive per hour?
  const { dayName, month, day, timeOfDay } = useTodayDate(new Date())

  return (
    <StyledHeader>
      <StyleHeading>👋 Good {timeOfDay}!</StyleHeading>
      <StyleSubHeading>
        It&apos;s {`${dayName}, ${month} ${day}`}
      </StyleSubHeading>
    </StyledHeader>
  )
}
