import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { AppStore } from 'app/stores/AppStore';
// import { routeState } from 'app/routeState'
// import { link } from 'takeme'
// import { links } from 'app/links'
// import { AppBar, Toolbar, Button } from '@material-ui/core'

@inject('appStore')
@observer
export class Foo extends React.Component<{ appStore?: AppStore }, {}>{
  render() {
    return <div>
      <h1>coo111121l</h1> <h2>{this.props.appStore!.user}</h2>
    </div>
  }
}
