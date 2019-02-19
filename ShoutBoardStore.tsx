import { observable } from 'mobx';

export interface Post {
    num : number,
    name : string,
    email : string,
    message : string,
    time : string
}

export class ShoutBoardStore {
    @observable posts : Post[] = [];
}
