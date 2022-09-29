import styled from 'styled-components'
import { devices } from '@styles/global'

export const StyeldLayout = styled.main`
  /* background-image: ; */ // Todo add bg image
  background-color: azure;
  backdrop-filter: blur(40px);
  overflow: hidden;
  height: 100vh;
`
export const StyledContent = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.mobile} {
    min-width: 75%;
    width: max-content;
  }

  @media ${devices.tablet} {
    min-width: 50%;
  }
`
