import { Checkbox } from '@components/checkbox'
import { StyledInputWrapper, StyledInputError } from './styles'
interface Props extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email' | 'search'
  withCheckbox?: boolean
  defaultChecked?: boolean
  error?: string
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  type = 'text',
  defaultChecked,
  error,
  withCheckbox,
  onChecked,
  ...rest
}: Props) => {
  return (
    <div>
      <StyledInputWrapper>
        {withCheckbox ? (
          <Checkbox defaultChecked={defaultChecked} onChange={onChecked} />
        ) : null}
        <input type={type} {...rest} />
      </StyledInputWrapper>
      <StyledInputError>{error}</StyledInputError>
    </div>
  )
}
