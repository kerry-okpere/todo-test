import { devices } from '@styles/global'
import styled from 'styled-components'

export const StyleHeading = styled.h1`
  color: ${(props) => props.theme.palette.gray.g7};
  font-size: xx-large;
  font-weight: 600;
  padding: 0.25rem 0;

  @media ${devices.mobile} {
    font-size: x-large;
  }
`

export const StyleSubHeading = styled.p`
  color: ${(props) => props.theme.palette.gray.g7};
  font-size: x-large;

  @media ${devices.mobile} {
    font-size: large;
  }
`

export const StyledHeader = styled.div`
  padding-bottom: 2rem;
`
