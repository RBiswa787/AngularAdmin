import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users = JSON.parse(window.localStorage.getItem("userData")!);
  constructor() { 
    if(window.localStorage.getItem("userData") === null){
      let data = [
        {
          "username" : "abc",
          "password" : "123"
        }
      ];

      window.localStorage.setItem("userData",JSON.stringify(data));
    }
    else{
      this.users = JSON.parse(window.localStorage.getItem("userData")!);
    }
  }

  getAllUser(){
    return this.users;
  }

  addUser(username: string, password: string){
    let user = {"username": username, "password": password};

    this.users.push(user);
    window.localStorage.setItem("userData",JSON.stringify(this.users));
  }
}
