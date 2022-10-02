import { useState } from 'react'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { StyledButton, StyleMenuList, StyledButtonWapper } from './styles'
import flattenChildren from 'react-keyed-flatten-children'
export { MoreMenuItem } from './more-menu-item'
import { useTheme, Theme } from 'styled-components'
import { Portal } from '@components/portal'
import Foco from 'react-foco'
interface Props {
  isOpen: boolean
  onClose: (isOpen: boolean) => void
  children: React.ReactNode
}

export const MoreMenu = ({ isOpen, onClose, children }: Props) => {
  const theme = useTheme() as Theme
  const [coords, setCoords] = useState({})

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    const extraSpace = 4
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    const { offsetWidth, offsetHeight } = event.currentTarget
    const portalElWidth = 170
    const right = portalElWidth - offsetWidth

    setCoords({
      left: rect.x - right,
      top: rect.y + offsetHeight + extraSpace,
      width: portalElWidth,
    })

    onClose(true)
  }

  return (
    <Foco
      onClickOutside={() => onClose(false)}
      onFocusOutside={() => onClose(false)}
    >
      <StyledButtonWapper>
        <StyledButton
          data-testid="menu-button"
          onClick={(e) => {
            handleOpen(e)
          }}
        />
        <CgMoreVerticalAlt size={theme.iconSize} />
      </StyledButtonWapper>

      <Portal isOpen={isOpen}>
        <StyleMenuList data-testid="menu-list" {...coords} isOpen={isOpen}>
          {flattenChildren(children).map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </StyleMenuList>
      </Portal>
    </Foco>
  )
}
