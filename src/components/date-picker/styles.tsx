import styled from 'styled-components'
import { DayPicker } from 'react-day-picker'

export const StyledDayPicker = styled(DayPicker)`
  &.rdp {
    --rdp-accent-color: #1e40af;
    --rdp-background-color: #eff6ff;
  }
`
export const StyleDropDown = styled.div`
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  gap: 0.5rem;
  cursor: pointer;
`
export const StyledDayPickerContent = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 40px;
  left: auto;
  right: 0;
  z-index: 10;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  height: ${(props) => (props.isOpen ? 'auto' : 0)};
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  background-color: ${(props) => props.theme.palette.gray['001']};
  transition: all 0.3s;
`

export const StyledDayPickerWrapper = styled.div`
  position: relative;
  width: max-content;

  ${StyledDayPickerContent} {
  }
`
