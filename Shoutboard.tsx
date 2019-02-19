import * as React from 'react'
import { Form } from 'app/components/Form'
import { Board } from 'app/components/Board'
import { inject, observer, Provider } from 'mobx-react';
import { ShoutBoardStore } from 'app/stores/ShoutBoardStore';

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


@inject("store")
@observer
class SBoard extends React.Component<{store?:ShoutBoardStore}, {}> {
    render() {
        return (
            <div>
                <div className="bg-grey-light w-4/5 h-full rounded p-3 ml-auto mr-auto mt-5">
                    <h1 className="text-center subpixel-antialiased">Shoutboard</h1>
                </div>
                <Form />
                <Board />
            </div>
        )
    }
}

const store = new ShoutBoardStore();

export class Shoutboard extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store = {store}>   
                <SBoard />
            </Provider>
        )
    }
}
