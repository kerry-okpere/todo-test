import styled from 'styled-components'

interface ListPortalProps {
  isOpen?: boolean
  left?: number
  top?: number
  width?: number
}

export const StyledButtonWapper = styled.button`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 0.5rem;
  transition: all 0.3s;
  background-color: ${(props) => props.theme.palette.gray.g3};
  overflow: hidden;

  :hover {
    background-color: ${(props) => props.theme.palette.gray.g5};
  }
`

export const StyledButton = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: transparent;
`

export const StyleMenuList = styled.ul<ListPortalProps>`
  height: ${(props) => (props.isOpen ? 'auto' : 0)};
  box-shadow: 0 0px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  position: absolute;
  background-color: ${(props) => props.theme.palette.gray.g1};
  border-radius: ${(props) => props.theme.borderRadius.md};
  max-height: 100px;
  overflow: scroll;
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
`

export const StyledMenuItem = styled.div`
  padding: 0.75rem;
  width: 100%;
  height: 100%;
  display: inline-flex;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: capitalize;
  color: ${(props) => props.theme.palette.gray.g8};

  :hover {
    background-color: ${(props) => props.theme.palette.gray.g5};
  }
`
