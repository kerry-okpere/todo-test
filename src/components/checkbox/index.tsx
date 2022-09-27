interface Props {
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = (props: Props) => {
  return (
    <input type="checkbox" {...props} onClick={(e) => e.stopPropagation()} />
  )
}
