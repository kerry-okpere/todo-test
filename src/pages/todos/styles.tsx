import styled from 'styled-components'
import { Button } from '@components/button'
import { devices } from '@styles/global'

export const StyledPageWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  form {
    border-radius: ${(props) => props.theme.borderRadius.md};
    background-color: ${(props) => props.theme.palette.gray['001']};
    padding: 2rem 1.5rem;
    height: 100%;

    @media ${devices.mobile} {
      padding: 2rem;
      height: 95%;
    }
  }
`

export const StyledDeleteButton = styled(Button)``
export const StyledSaveButton = styled(Button)``

export const StyledActionWrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  ${StyledDeleteButton} {
    width: 30%;
  }
  ${StyledSaveButton} {
    width: 70%;
  }
`

export const StyledLink = styled.a`
  display: inline-flex;
  gap: 0.5rem;
  transition: all 0.3s;
  padding: 0.5rem 0;
`
