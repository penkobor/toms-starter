import * as React from 'react'
import { observer } from 'mobx-react'
import { routeState } from 'app/routeState'
import { link } from 'takeme'
import { links } from 'app/links'

export const Nav = observer(() => {
  return <div>
    {routeState.loggedIn && <div>
      <a href={link(links.profile('dave'))}>Dave</a>
      <a href={link(links.profile('john'))}>John</a>
    </div>}
    {routeState.loggedIn && <button className='simple-button' onClick={() => routeState.logout()}>Logout</button>}

  </div>;
});
