import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Pages } from 'app/Pages'

// This might need some tuning
// https://mobx.js.org/best/stateless-HMR.html
export const App = hot(module)(() => <Pages />)
