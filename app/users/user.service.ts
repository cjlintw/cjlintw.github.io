import { Injectable } from 'angular2/core';
import { User } from './user';

@Injectable()
export class UserService {
  getUser() {
    return MOCKUSER;
  }
}

var MOCKUSER = {
  id: 1,
  name: "Nick Lin",
  email: "starshiping@gmail.com",
  note: ""
}