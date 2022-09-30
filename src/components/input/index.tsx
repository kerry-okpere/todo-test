import { Checkbox } from '@components/checkbox'
import { Loader } from '@components/loader'
import { Theme, useTheme } from 'styled-components'
import { StyledInputWrapper, StyledInputError, StyledLoader } from './styles'
export interface Props extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'tel' | 'email' | 'search'
  withCheckbox?: boolean
  isLoading?: boolean
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
  isLoading,
  onChecked,
  ...rest
}: Props) => {
  const theme = useTheme() as Theme

  return (
    <div>
      <StyledInputWrapper>
        {withCheckbox ? (
          <Checkbox defaultChecked={defaultChecked} onChange={onChecked} />
        ) : null}
        <input type={type} {...rest} />
        {isLoading ? (
          <StyledLoader>
            <Loader size={theme.iconSize} />{' '}
          </StyledLoader>
        ) : null}
      </StyledInputWrapper>
      <StyledInputError>{error}</StyledInputError>
    </div>
  )
}
