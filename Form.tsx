import * as React from 'react'
import { TextField, Button } from '@material-ui/core';
import { observer, inject } from 'mobx-react';
import { ShoutBoardStore } from 'app/stores/ShoutBoardStore';
import { observable } from 'mobx';
import { TextFieldProps } from '@material-ui/core/TextField';





export const FieldForText: React.SFC<{label : string} & TextFieldProps> = ({label, ...rest}) => {
    return (
        <div className="flex w-2/5 ml-auto mr-auto bg-grey-lighter rounded m-1">
                        <div className="mt-6 ml-5 mr-2"> { label } </div>
                        <div className="flex-grow relative p-3 m-1">
                            <TextField 
                                classes={{
                                    root : "w-full"
                                }} 
                                { ...rest }
                            />
                        </div>
                    </div>
        );
}



@inject("store")
@observer
export class Form extends React.Component<{store?:ShoutBoardStore}, {}> {

    @observable firstField = "";
    @observable secondField = "";
    @observable thirdsField = "";

    //here could be your validation 
    parseObject = () => {
        const { store } = this.props;
        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let dateString = date + "-" +(month + 1) + "-" + year;
        let number = store!.posts.length +1;
        let myObj = { name: this.firstField, email: this.secondField, message: this.thirdsField, time: dateString, num : number };
        let index = store!.posts.length;
        store!.posts[index] = myObj;
    }

    render() {
        return (
            <div>
                <div className="bg-grey-light w-4/5 h-full rounded p-3 ml-auto mr-auto mt-5">
                    <FieldForText label="Name: " value={this.firstField} onChange={(event) => { this.firstField = event.target.value }} />
                    <FieldForText label="Email: " value={this.secondField} onChange={(event) => { this.secondField = event.target.value }} />
                    <FieldForText label="Message: " value={this.thirdsField} onChange={(event) => { this.thirdsField = event.target.value }} multiline rowsMax="4" />
                    <div className="flex justify-center mt-3 mb-1" >
                        <Button classes={{root : "w-1/5 bg-white"}}variant="outlined" onClick={this.parseObject}>Post</Button>
                    </div>
                </div>
            </div>
        )
    }
}