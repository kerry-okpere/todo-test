import styled from 'styled-components'
import type { Todo } from 'global'
import { devices } from '@styles/global'

export const StyledTodoItemTitle = styled.div<Partial<Todo>>`
  max-width: 120px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
  font-style: ${(props) => (props.isComplete ? 'italic' : 'normal')};

  @media ${devices.mobileS} {
    max-width: 400px;
  }

  @media ${devices.tablet} {
    max-width: 500px;
  }
`
export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const StyledTodoItem = styled.div<Partial<Todo>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.palette.gray['001']};
  padding: 0.5em 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`
export const StyledTodoList = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
`