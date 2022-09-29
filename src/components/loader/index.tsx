import { StyledLoader } from './styles'

interface Props {
  size?: number
}
export const Loader = ({ size }: Props) => {
  return <StyledLoader size={size}></StyledLoader>
}
