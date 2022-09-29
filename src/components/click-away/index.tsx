import { useEffect, useRef } from 'react'

interface Props {
  children?: React.ReactNode
  onClickAway: () => void
}
export const ClickAway = ({ children, onClickAway }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickAway()
      }
    }

    document.addEventListener('mousedown', handleClickAway, true)

    return () => {
      document.removeEventListener('mousedown', handleClickAway, true)
    }
  }, [onClickAway])

  return (
    <div style={{ width: 'max-content' }} ref={wrapperRef}>
      {children}
    </div>
  )
}
