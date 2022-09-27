interface Props {
  value?: string
  placeholder?: string
  type?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: () => void
}

export const Input = ({ type = 'text', onEnter, ...rest }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    onEnter && onEnter()
  }

  return <input type={type} onKeyDown={handleKeyDown} {...rest} />
}
