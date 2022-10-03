import styled from 'styled-components'

export const StyledTab = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 0.5rem 0;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  transition: all 0.3s;
  color: ${(props) =>
    props.isActive ? props.theme.palette.gray.g7 : props.theme.palette.gray.g6};
  box-shadow: ${(props) =>
    props.isActive
      ? '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
      : 'none'};
  border-radius: ${(props) => props.theme.borderRadius.md};
  background-color: ${(props) =>
    props.isActive ? props.theme.palette.gray.g1 : props.theme.palette.gray.g3};
`

export const StyledTabWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.gray.g3};
  align-items: center;
  padding: 0.25rem;
  display: flex;
  border-radius: ${(props) => props.theme.borderRadius.md};
`
