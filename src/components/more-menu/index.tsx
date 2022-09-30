import { useState } from 'react'
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { StyledButton, StyledMenuWrapper, StyleMenuList } from './styles'
import flattenChildren from 'react-keyed-flatten-children'
export { MoreMenuItem } from './more-menu-item'
import { useTheme, Theme } from 'styled-components'
import { Portal } from '@components/portal'
import Foco from 'react-foco'
interface Props {
  children: React.ReactNode
}

export const MoreMenu = ({ children }: Props) => {
  const theme = useTheme() as Theme
  const [coords, setCoords] = useState({})
  const [isOpen, setOpen] = useState(false)

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect()
    const { offsetWidth, offsetHeight } = event.currentTarget
    const portalElWidth = 170
    const right = portalElWidth - offsetWidth

    setCoords({
      left: rect.x - right,
      top: rect.y + offsetHeight,
      width: portalElWidth,
    })

    setOpen(true)
  }

  return (
    <Foco
      onClickOutside={() => setOpen(false)}
      onFocusOutside={() => setOpen(false)}
    >
      <StyledMenuWrapper>
        <StyledButton
          onClick={(e) => {
            handleOpen(e)
          }}
        >
          <CgMoreVerticalAlt size={theme.iconSize} />
        </StyledButton>
      </StyledMenuWrapper>

      <Portal isOpen={isOpen}>
        <StyleMenuList {...coords} isOpen={isOpen}>
          {flattenChildren(children).map((child, index) => {
            return <li key={index}>{child}</li>
          })}
        </StyleMenuList>
      </Portal>
    </Foco>
  )
}
