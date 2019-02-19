import * as React from 'react'
import { observer } from 'mobx-react';
import { ShoutBoardStore, Post } from 'app/stores/ShoutBoardStore';

/**
 * Shoutboard should consist of:
 *  - form for submitting new message (name, email, message and submit button) with validation
 *  - list of submitted messages ordered descending by creation date (newest first)
 * 
 * Any message submitted via form will be displayed in list of messages below.
 * 
 * Try to:
 *  - Use material design components (https://material-ui.com/getting-started/usage/)
 *      - For example: TextField, Button, Typography, ...
 *  - For styling use tailwind css classes (https://tailwindcss.com/docs/what-is-tailwind)
 *      - margins (m-0, mt-2, mx-4, ...)
 *      - flexbox (flex, flex-row-reverse, ...)
 */


@observer
export class ConcretePost extends React.Component<{store?:ShoutBoardStore, post: Post}, {}> {
    render() {
        const { name, time, email, message } = this.props.post;
        return (
            <div>
                <div className="h-64 mr-auto ml-auto bg-grey-lighter m-3 rounded p-5">

                <div className="flex w-full h-48 bg-grey-lighter rounded">
                    <div className="text-grey-darker w-64 bg-grey-light px-4 py-2 m-2 rounded">
                        <div className="flex-col w-full h-full">
                            <div className="flex-grow bg-grey w-full h-8 mt-2 rounded p-2">
                            { name }
                            </div>
                            <div className="flex-grow bg-grey w-full h-8 mt-2 rounded p-2">
                            { time }
                            </div>
                            <div className="flex-grow bg-grey w-full h-16 mt-2 rounded p-2">
                            { email }
                            </div>
                        </div>
                    </div>   

                    <div className="flex-grow text-grey-darker bg-grey-light p-8 m-2 rounded">
                    { message }
                    </div>
                </div>
                </div>
            </div>
        )
    }
}