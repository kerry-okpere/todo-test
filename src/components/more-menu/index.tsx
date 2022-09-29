import { useRef, useState } from 'react'
import { ClickAway } from '@components/click-away'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { StyledButton, StyledMenuWrapper, StyleMenuList } from './styles'
import flattenChildren from 'react-keyed-flatten-children'
export { MoreMenuItem } from './more-menu-item'

interface Props {
  children: React.ReactNode
}

export const MoreMenu = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ClickAway onClickAway={() => setIsOpen(false)}>
      <StyledMenuWrapper onClick={() => setIsOpen(true)}>
        <StyledButton>
          <CgMoreVerticalAlt size={17} />
        </StyledButton>
        <StyleMenuList isOpen={isOpen}>
          {flattenChildren(children).map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </StyleMenuList>
      </StyledMenuWrapper>
    </ClickAway>
  )
}
