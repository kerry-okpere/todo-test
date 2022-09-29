/*eslint indent: ["error", 2, { "ignoredNodes": ["ConditionalExpression"] }]*/
import styled from 'styled-components'

export const HiddenCheckbox = styled.input`
  height: 1px;
  width: 1px;
  padding: 0;
  white-space: nowrap;
  position: absolute;
  overflow: hidden;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`

export const StyledCheckbox = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem;
  background-color: ${(props) =>
    props.checked ? props.theme.palette.gray.g8 : props.theme.palette.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.checked
        ? props.theme.palette.gray.g8
        : props.theme.palette.gray.g5};
  }

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.theme.palette.gray.g6};
  }
`

export const StyledWrapper = styled.label`
  display: inline-block;
  vertical-align: middle;
`
