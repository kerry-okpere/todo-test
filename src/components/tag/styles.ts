import styled from 'styled-components'

export const StyledTag = styled.span`
  padding: 0px 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.palette.gray.g3};
  color: ${(props) => props.theme.palette.gray.g7};
  font-size: 12px;
  font-weight: bold;
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
`
