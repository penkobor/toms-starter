import * as React from 'react'
import { observer } from 'mobx-react'
import { Profile } from 'app/components/Profile'
import { Login } from 'app/components/Login'
import { routeState } from 'app/routeState'

/**
 * Application State -> Page
 */
export const Pages = observer(() => {
  switch (routeState.route) {
    case 'login': return <Login />;
    case 'profile': return <Profile profileId={routeState.profileId} />
    default:
      return <h1>404</h1>
  }
});
