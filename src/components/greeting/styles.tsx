import styled from 'styled-components'

export const StyleHeading = styled.h1`
  color: ${(props) => props.theme.palette.gray['007']};
  font-size: x-large;
  font-weight: 600;
  padding: 0.25rem 0;
`

export const StyleSubHeading = styled.p`
  color: ${(props) => props.theme.palette.gray['007']};
  font-size: large;
`

export const StyledHeader = styled.div`
  padding: 2rem 0;
`
