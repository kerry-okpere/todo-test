import React from 'react'
import { StyledTextArea } from './styles'

export const Textarea = (props: React.ComponentPropsWithoutRef<'textarea'>) => {
  return <StyledTextArea {...props}></StyledTextArea>
}
