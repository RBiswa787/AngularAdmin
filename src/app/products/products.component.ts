import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private productService : ProductsServiceService){
    console.log("Hello form constructor!");
   
  }
  ngOnInit(){
    this.populateTable();
    const CREATE_BUTTON = document.getElementById("createButton");
    (CREATE_BUTTON as HTMLButtonElement).addEventListener("click" , () => {
      window.location.href = "./products/create";
    });
  }

  populateTable(){
    const PRODUCTS : any[] = this.productService.getAllProducts();
    const TABLE = document.getElementById("table");
    PRODUCTS.forEach(item => {
      console.log(item.name);
      console.log(item.price);
      let tr = (TABLE as HTMLTableElement).insertRow();
      let td_id = tr.insertCell();
      td_id.innerText = item.id;
      let td_name = tr.insertCell();
      td_name.innerText = item.name;
      let td_price = tr.insertCell();
      td_price.innerText = item.price;

      const EDIT = document.createElement("button");
      EDIT.style.display = "flex";
      EDIT.style.backgroundColor = "white";
      EDIT.style.justifyContent  = "center";
      EDIT.style.alignItems = "center";
      EDIT.style.width = "90px";
      EDIT.style.height = "70%";
      EDIT.style.border = "1px solid black";
      EDIT.style.borderRadius= "10px";
      EDIT.style.padding = "5%";
      EDIT.innerText = "EDIT";
      EDIT.addEventListener("click", () => {
        window.location.href = "/products/edit/"+String(item.id);
      });
      let td_edit =tr.insertCell();
      td_edit.appendChild(EDIT);
    });

  }
}
