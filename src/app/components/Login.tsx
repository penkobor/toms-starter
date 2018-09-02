import * as React from 'react'
import { observer } from 'mobx-react'
import { routeState } from 'app/routeState'
import { Nav } from 'app/components/Nav'
import { Foo } from 'app/components/Foo';

export const Login = observer(() =>
  <div>
    <Nav />
    <h3>Login Page</h3>
    {routeState.loggedIn && <div>You are logged in! Visit some profile page :)</div>}
    {routeState.loginRequiredMessage && <div>{routeState.loginRequiredMessage}</div>}
    <Foo/>
  </div>
);

