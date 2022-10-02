import { useTodayDate } from '@hooks/useDate'
import { useState } from 'react'
import {
  StyleDropDown,
  StyledDayPickerWrapper,
  StyledDayPicker,
  StyledDayPickerContent,
} from './styles'
import { CgChevronDown } from 'react-icons/cg'
import 'react-day-picker/dist/style.css'
import { ClickAway } from '@components/click-away'
import { useTheme, Theme } from 'styled-components'
interface Props {
  selected?: Date
  onDayClick?: (day: Date) => void
}

export const DatePicker = ({ selected, onDayClick }: Props) => {
  const theme = useTheme() as Theme
  const [isOpen, setIsOpen] = useState(false)
  const { month, day, year } = useTodayDate(selected)

  const handleSelect = (day: Date) => {
    setIsOpen(false)
    return onDayClick && onDayClick(day)
  }

  return (
    <ClickAway onClickAway={() => setIsOpen(false)}>
      <StyledDayPickerWrapper>
        <StyleDropDown
          data-testid="date-picker"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {selected ? (
            <span>{`${month} ${day} ${year}`}</span>
          ) : (
            <span>Select Date</span>
          )}
          <CgChevronDown size={theme.iconSize} />
        </StyleDropDown>
        <StyledDayPickerContent isOpen={isOpen}>
          <StyledDayPicker
            mode="single"
            selected={selected}
            onDayClick={handleSelect}
          />
        </StyledDayPickerContent>
      </StyledDayPickerWrapper>
    </ClickAway>
  )
}
