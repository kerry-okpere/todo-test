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
    background-color: ${(props) => props.theme.palette.gray.g1};
    padding: 2rem 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${devices.mobile} {
      padding: 2rem;
      height: 95%;
    }
  }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledDate = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.palette.gray.g3};

  p {
    color: ${(props) => props.theme.palette.gray.g7};
    font-weight: 500;
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
