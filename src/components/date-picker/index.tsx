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

interface Props {
  selected?: Date
  onDayClick?: (day: Date) => any
}

export const DatePicker = ({ selected = new Date(), onDayClick }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [selected, setSelected] = useState<Date>(new Date())
  const { month, day, year } = useTodayDate(selected)

  const handleSelect = (day: Date) => {
    setIsOpen(false)
    // return setSelected(day)
    return onDayClick && onDayClick(day)
  }

  return (
    <ClickAway onClickAway={() => setIsOpen(false)}>
      <StyledDayPickerWrapper>
        <StyleDropDown onClick={() => setIsOpen((prev) => !prev)}>
          <span>{`${month} ${day} ${year}`}</span>
          <CgChevronDown size={17} />
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
