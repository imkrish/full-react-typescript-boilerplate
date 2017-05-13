import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue500, pinkA200 } from 'material-ui/styles/colors'

// COLORS
export const primaryColor = blue500
export const accentColor = pinkA200

export const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: primaryColor,
    accent1Color: accentColor
  }
})
