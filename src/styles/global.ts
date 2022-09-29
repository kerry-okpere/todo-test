import { theme } from './theme'

export const devices = {
  mobileS: `(min-width: ${theme.screen.sm})`,
  mobile: `(min-width: ${theme.screen.md})`,
  tablet: `(min-width: ${theme.screen.lg})`,
  laptop: `(min-width: ${theme.screen.xl})`,
  desktop: `(min-width: ${theme.screen['2xl']})`,
}
