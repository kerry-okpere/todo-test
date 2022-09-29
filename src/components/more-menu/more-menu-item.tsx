import { StyledMenuItem } from './styles'
//
export const MoreMenuItem = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledMenuItem {...rest} onClick={rest.onClick}>
      {children}
    </StyledMenuItem>
  )
}
