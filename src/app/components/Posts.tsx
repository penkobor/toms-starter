import * as React from 'react'
import { observer, inject } from 'mobx-react'
// import { routeState } from 'app/routeState'
import { Nav } from 'app/components/Nav'
import { observable } from 'mobx'
// import { Button } from '@material-ui/core'
import { AppStore } from 'app/stores/AppStore'
import * as ky from 'ky'

interface IPost {
  userId
  id
  title
  body
}

@inject('appStore')
@observer
export class Posts extends React.Component<{ appStore?: AppStore }, {}> {
  @observable counter: number = 0
  @observable posts: IPost[] = []
  fetchPosts = async () => {
    this.posts = await ky.get('https://jsonplaceholder.typicode.com/posts').json()
  }
  componentWillMount() {
    this.fetchPosts()
  }
  render() {
    return <div>
      <Nav />
      <h3>Posts</h3>
      {this.posts.map(p => <div key={p.id}>{p.title}</div>)}
    </div>
  }
}

