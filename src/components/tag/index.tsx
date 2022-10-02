import { StyledTag } from './styles'
export interface Props extends React.ComponentPropsWithoutRef<'span'> {
  text: string
}

export const Tag = ({ text, ...rest }: Props) => {
  return <StyledTag {...rest}>{text}</StyledTag>
}
