import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Pages } from 'app/Pages'
import { Provider } from 'mobx-react'
import { AppStore } from 'app/stores/AppStore'

// This might need some tuning
// https://mobx.js.org/best/stateless-HMR.html
export const App = hot(module)(() =>
  <Provider appStore={AppStore.getInstance()}>
    <Pages />
  </Provider >
)
