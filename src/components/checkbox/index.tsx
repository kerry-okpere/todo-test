import { HiddenCheckbox, StyledCheckbox, StyledWrapper } from './styles'
import { HiCheck } from 'react-icons/hi'
import React, { useState } from 'react'

interface Props extends React.HTMLProps<HTMLInputElement> {
  name?: string
  defaultChecked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ name, defaultChecked, onChange }: Props) => {
  const [checked, setChecked] = useState(defaultChecked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    onChange && onChange(e)
  }

  return (
    <StyledWrapper
      onClick={(e: React.MouseEvent<HTMLLabelElement>) => e.stopPropagation()}
    >
      <HiddenCheckbox
        name={name}
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
