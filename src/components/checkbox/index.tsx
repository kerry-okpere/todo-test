import { HiddenCheckbox, StyledCheckbox, StyledWrapper } from './styles'
import { HiCheck } from 'react-icons/hi'
import { useState } from 'react'
export interface Props {
  className?: boolean
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ className, defaultChecked, onChange }: Props) => {
  const [checked, setChecked] = useState(defaultChecked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange && onChange(e)
  }

  return (
    <StyledWrapper
      className={className}
      onClick={(e: Event) => e.stopPropagation()}
    >
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <StyledCheckbox checked={checked}>
        <HiCheck color="white" />
      </StyledCheckbox>
    </StyledWrapper>
  )
}
