import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import { configureStore } from './store/configureStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { RootContainer } from './scenes/root/RootContainer'


injectTapEventPlugin()

const store = configureStore()
export const browserHistory = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <RootContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
