import styled from 'styled-components'
import { Props } from './index'

export const StyledInputWrapper = styled.div<Props>`
  position: relative;
  background-color: ${(props) => props.theme.palette.gray.g2};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0 0 1rem;

  input {
    align-self: stretch;
    width: 100%;
    padding: 1rem 0 1rem 0;
  }

  :focus-within {
    outline: 1.5px solid ${(props) => props.theme.palette.gray.g8};
  }
`
export const StyledInputError = styled.small`
  color: ${(props) => props.theme.palette.error.e2};
`
export const StyledLoader = styled.div`
  right: 1rem;
  position: absolute;
`
