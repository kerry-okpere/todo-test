import { StyledButton } from './styles'

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  appearance?: 'primary' | 'error'
  children: React.ReactNode
}
export const Button = ({
  appearance = 'primary',
  children,
  ...rest
}: Props) => {
  return (
    <StyledButton appearance={appearance} {...rest}>
      {children}
    </StyledButton>
  )
}
