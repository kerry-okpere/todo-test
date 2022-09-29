import styled from 'styled-components'
import { devices } from '@styles/global'

export const StyledPageWrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 1.5rem;

  @media ${devices.mobile} {
    padding: 0;
  }
`

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
`
