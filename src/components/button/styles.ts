import styled from 'styled-components'
import { Props } from './index'

export const StyledButton = styled.button<Props>`
  padding: 0.75rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) =>
    props.appearance === 'primary'
      ? props.theme.palette.gray['001']
      : props.theme.palette.error['002']};
  background-color: ${(props) =>
    props.appearance === 'primary'
      ? props.theme.palette.gray['008']
      : props.theme.palette.error['001']};
`
