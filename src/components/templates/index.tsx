import { StyeldLayout, StyledContent } from './styles'

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <StyeldLayout>
      <StyledContent>{props.children}</StyledContent>
    </StyeldLayout>
  )
}
