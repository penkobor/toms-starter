import { observable } from "mobx"

export class AppStore {
  static instance: AppStore
  static getInstance() {
    return this.instance || (this.instance = new AppStore())
  }
  @observable user: string = 'Tomas'
}

