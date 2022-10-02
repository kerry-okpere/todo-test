import { StyledTag } from './styles'
interface Props extends React.HTMLProps<HTMLSpanElement> {
  text: string
}

export const Tag = ({ text }: Props) => {
  return <StyledTag>{text}</StyledTag>
}
