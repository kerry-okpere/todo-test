import styled from 'styled-components'
import { devices } from '@styles/global'

export const StyledPageWrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 3rem 1.5rem 4rem;

  @media ${devices.mobile} {
    padding: 2rem 0rem 4rem;
  }
`

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
`
