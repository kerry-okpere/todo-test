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

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 200px;
`
