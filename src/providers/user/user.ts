import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  public user:any = {};

  constructor() {

  }

  set(user) {
    this.user = user;
  }

  get() {
    return this.user;
  }

}
