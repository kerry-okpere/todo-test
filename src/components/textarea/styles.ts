import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
  width: 100%;
  background-color: ${(props) => props.theme.palette.accent.a1};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.75rem;

  &,
  ::placeholder {
    color: ${(props) => props.theme.palette.accent.a2};
  }
`
