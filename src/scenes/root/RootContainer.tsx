import * as React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { muiTheme } from './muiTheme'


const Root = () => {
  return (
    <MuiThemeProvider
      muiTheme={muiTheme}
    >
      <div>
        <h1>I am a root container!</h1>
      </div>
    </MuiThemeProvider>
  )
}

export const RootContainer = connect(
  null,
  null
)(Root)
