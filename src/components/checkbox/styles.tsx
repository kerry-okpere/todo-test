import styled from 'styled-components'

type Props = {
  className?: string
  [key: string]: any //fix: type issue
}

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
  background: ${(props) => (props.checked ? '#222' : '#eeeff2')};
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.checked ? '#222' : '#e4e5e9')};
  }

  svg {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #c1c1c1;
  }
`

export const StyledWrapper = styled.label<Props>`
  display: inline-block;
  vertical-align: middle;
`
