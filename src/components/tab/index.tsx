import { StyledTabWrapper, StyledTab } from './styles'

export const Tab = ({
  active,
  tabs,
  onChange,
}: {
  active: string
  tabs: string[]
  onChange: (tab: string) => void
}) => {
  return (
    <StyledTabWrapper>
      {tabs.map((tab) => (
        <StyledTab
          isActive={active === tab}
          key={tab}
          onClick={() => onChange(tab)}
          type="button"
        >
          {tab}
        </StyledTab>
      ))}
    </StyledTabWrapper>
  )
}
