import styled from 'styled-components'
import { devices } from '@styles/global'

export const StyledPageWrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1.5rem 1.5rem;

  @media ${devices.mobile} {
    padding: 2rem 0rem;
  }
`
export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;
`
export const StyledPageTabWrapper = styled.div`
  width: 300px;
  padding: 0.75rem 0;
  margin: 0 auto;
`
