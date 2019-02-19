import * as React from 'react'
import { ConcretePost } from 'app/components/ConcretePost'
import { observer, inject } from 'mobx-react';
import { ShoutBoardStore } from 'app/stores/ShoutBoardStore';
import { computed } from 'mobx';

@inject("store")
@observer
export class Board extends React.Component<{store?:ShoutBoardStore}, {}> {
    
    @computed get sortedPosts() {
        return this.props.store!.posts.sort((a, b) => b.num - a.num);
    }
    
    render() {
        const { store } = this.props
        if (store!.posts.length == 0) {
            return (
                <div className="w-4/5 mr-auto ml-auto bg-grey m-3 rounded p-5"> </div>
            )
        }
        return (
            <div className="w-4/5 mr-auto ml-auto bg-grey m-3 rounded p-5">
                {this.sortedPosts.map(item => {
                    return (
                        <div key={item.num}>
                            <ConcretePost post={item}/>
                        </div>
                    )
                })}
                </div>
            )
    }
}