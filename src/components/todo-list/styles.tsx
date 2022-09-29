import styled from 'styled-components'
import type { Todo } from 'global'
import { Tag } from '@components/tag'

export const StyledTodoItem = styled.div<Partial<Todo>>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.palette.gray['001']};
  padding: 0.5em 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: ${(props) => (props.isComplete ? 'line-through' : 'none')};
    font-style: ${(props) => (props.isComplete ? 'italic' : 'normal')};
  }
`

export const StyledTitle = styled.div`
  min-width: 0;
  flex: 2;
`

export const StyledTodoList = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: scroll;
`
