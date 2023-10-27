import { Component, OnInit} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent  {

  public userData : FormGroup ;
  constructor(private userService : UserServiceService){
    console.log(this.userService.getAllUser());

    this.userData= new FormGroup({
      'username' : new FormControl(''),
      'password' : new FormControl('')
    });
  }


  onSubmit( ){
    this.userService.addUser(this.userData.value['username'],this.userData.value['password']);
    alert("Registration Successful!");
    console.log(this.userService.getAllUser());
  }

  onSignIn(){
    let username = this.userData.value['username'];
    let password  =this.userData.value['password'];
    let found = this.userService.getAllUser().filter(function(item: any){
      return item.username == username;
    });

    if(found.length > 0){
      if(found[0].password == password){
        alert("Authentication Successful!");
      }
      else{
        alert("Auth Unsuccessful!");
      }
    }
    else{
      alert("Username does not exist!");
    }
  }
  
}
