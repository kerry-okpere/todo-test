import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: ${(props) => props.theme.borderRadius.md};
  padding: 0.3rem;
  transition: all 0.3s;
  background-color: ${(props) => props.theme.palette.gray['003']};

  :hover {
    background-color: ${(props) => props.theme.palette.gray['005']};
  }
`

export const StyledMenuWrapper = styled.div`
  position: relative;
`

export const StyleMenuList = styled.ul<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? 'auto' : 0)};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  position: absolute;
  background-color: ${(props) => props.theme.palette.gray['001']};
  width: 170px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s;
  left: auto;
  right: 0;
`

export const StyledMenuItem = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  display: inline-flex;
  gap: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: capitalize;
  color: ${(props) => props.theme.palette.gray['008']};

  :hover {
    background-color: ${(props) => props.theme.palette.gray['005']};
  }
`
