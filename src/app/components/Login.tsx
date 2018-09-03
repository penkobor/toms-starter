import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { routeState } from 'app/routeState'
import { Nav } from 'app/components/Nav'
import { Foo } from 'app/components/Foo'
import { observable } from 'mobx'
import { Button } from '@material-ui/core'
import { AppStore } from 'app/stores/AppStore';

@inject('appStore')
@observer
export class Login extends React.Component<{ appStore?: AppStore }, {}> {
  @observable counter: number = 0
  incHandler = () => {
    console.log('here')
    this.counter++
  }
  render() {
    console.log(this.props.appStore)
    return <div>
      <Nav />
      <h3>Login Page</h3>
      <h4>Counts: {this.counter}</h4>
      <h5>Current User: {this.props.appStore!.user}</h5>
      <Button variant="raised" color='primary' onClick={this.incHandler}>INC</Button>
      {routeState.loggedIn && <div>You are logged in! Visit some profile page :)</div>}
      {routeState.loginRequiredMessage && <div>{routeState.loginRequiredMessage}</div>}
      <Foo />
    </div>
  }
}

