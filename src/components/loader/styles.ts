import styled from 'styled-components'
import { CgSpinner } from 'react-icons/cg'

export const StyledLoader = styled(CgSpinner)`
  animation: rotateSpinner 800ms linear infinite;

  @keyframes rotateSpinner {
    to {
      transform: rotate(360deg);
    }
  }
`
