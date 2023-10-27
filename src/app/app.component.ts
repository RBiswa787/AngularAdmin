import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-admin';

  constructor(){
    if(window.localStorage.getItem("userData") === null){
      let data = [
        {
          "username" : "abc",
          "password" : "123"
        }
      ];

      window.localStorage.setItem("userData",JSON.stringify(data));
    }

    if (window.localStorage.getItem("productData") === null) {
      let data = [
        {
          "id": "1",
          "name": "Chocolate",
          "price": 90
        },
        {
          "id": "2",
          "name": "Bag",
          "price": 125
        },
        {
          "id": "3",
          "name": "Headphones",
          "price": 350
        },
      ];

      window.localStorage.setItem("productData", JSON.stringify(data));
    }


  }
}
