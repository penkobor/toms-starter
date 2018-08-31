import * as React from 'react'
import { observer } from 'mobx-react'
import { routeState } from 'app/routeState'
import { Nav } from 'app/components/Nav'

export const Login = observer(() =>
  <div>
    <h3>Login Page</h3>
    {!routeState.loggedIn && <button className='simple-button' onClick={() => routeState.login()}>Click here to login</button>}
    {routeState.loggedIn && <div>You are logged in! Visit some profile page :)</div>}
    {routeState.loginRequiredMessage && <div>{routeState.loginRequiredMessage}</div>}
    <Nav />
  </div>
);

