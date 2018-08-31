import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { router } from 'app/router'
import { App } from 'app/App'

require('./styles/index.css')

ReactDOM.render(<App />, document.getElementById('root'))

router.init();

// Do not use 'prettier' yet, decorators on same line are not supported
// https://github.com/prettier/prettier/issues/4924#issuecomment-417626815