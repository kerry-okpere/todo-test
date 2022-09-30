import ReactDOM from 'react-dom'

export const Portal = ({
  isOpen,
  children,
}: {
  isOpen?: boolean
  children?: React.ReactNode
}) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(children, document.body)
}
