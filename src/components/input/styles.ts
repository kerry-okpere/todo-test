import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.gray.g2};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0 0 0.75rem;

  input {
    align-self: stretch;
    width: 100%;
    padding: 0.75rem 0;
  }

  :focus-within {
    outline: 1.5px solid ${(props) => props.theme.palette.gray.g8};
  }
`
export const StyledInputError = styled.small`
  color: ${(props) => props.theme.palette.error.e1};
`
