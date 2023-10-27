import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  count : string = "0";

  constructor(private productService : ProductsServiceService){

  }

  ngOnInit(){
    this.populateCart();
  }

  populateCart(){
    const MAIN  = document.getElementById("content-market");
    let productData = this.productService.getAllInCart();
    console.log(productData);
    productData.forEach(product => {
      const CARD = document.createElement("div");
      CARD.style.display = "flex";
      CARD.style.width = "90%";
      CARD.style.height = "3em";
      CARD.style.backgroundColor = "white";
      CARD.style.borderRadius = "10px";
      CARD.style.alignItems = "center";
      // CARD.style.border = "1px solid red";
      CARD.style.marginBottom = "3%";

      const CARD_TITLE = document.createElement("div");
      CARD_TITLE.style.display = "flex";
      CARD_TITLE.style.width = "30%";
      CARD_TITLE.style.height = "100%";
      CARD_TITLE.style.justifyContent = "center";
      CARD_TITLE.style.alignItems = "center";
      CARD_TITLE.style.fontSize = "1.2em";
      CARD_TITLE.innerText = product['name'];
      // CARD_TITLE.style.border = "1px solid blue";
      CARD_TITLE.style.marginRight = "2%";

      const CARD_PRICE = document.createElement("div");
      CARD_PRICE.style.display = "flex";
      CARD_PRICE.style.width = "10%";
      CARD_PRICE.style.height = "100%";
      CARD_PRICE.style.justifyContent = "center";
      CARD_PRICE.style.alignItems = "center";
      CARD_PRICE.style.fontSize = "0.9em";
      CARD_PRICE.style.fontStyle = "italic";
      CARD_PRICE.innerText = "Rs." + product['price'];
      CARD_PRICE.style.marginRight = "22%";
      // CARD_PRICE.style.border = "1px solid green";

      const ADD_TO_CART = document.createElement("button");
      ADD_TO_CART.style.display = "flex";
      ADD_TO_CART.style.width = "15%";
      ADD_TO_CART.style.height = "100%";
      ADD_TO_CART.style.justifyContent = "center";
      ADD_TO_CART.style.alignItems = "center";
      ADD_TO_CART.style.backgroundColor = "white";
      ADD_TO_CART.style.border = "1px solid black";
      ADD_TO_CART.style.borderRadius = "10px";
      ADD_TO_CART.innerText = "Remove";
      ADD_TO_CART.style.fontSize = "0.9em";
      ADD_TO_CART.style.color = "black";
      ADD_TO_CART.style.marginRight = "5%";

      ADD_TO_CART.addEventListener("click", () => {
        this.productService.removeFromCart(product["id"]);
        window.location.reload();
      });

      const CARD_CONTROL = document.createElement("div");
      CARD_CONTROL.style.display = "flex";
      CARD_CONTROL.style.width = "15%";
      CARD_CONTROL.style.height = "100%";
      // CARD_CONTROL.style.border = "1px solid black";
      CARD_CONTROL.style.justifyContent = "space-between";

      const ADD = document.createElement("button");
      ADD.style.display = "flex";
      ADD.style.justifyContent = "center";
      ADD.style.alignItems = "center";
      ADD.style.fontSize = "1.1em";
      ADD.style.backgroundColor = "black";
      ADD.style.color = "white";
      ADD.innerText = "+";
      ADD.style.height = "100%";
      ADD.style.aspectRatio = "1/1";
      ADD.style.border = "none";

      const SUB = document.createElement("button");
      SUB.style.display = "flex";
      SUB.style.justifyContent = "center";
      SUB.style.alignItems = "center";
      SUB.style.fontSize = "1.1em";
      SUB.style.backgroundColor = "black";
      SUB.style.color = "white";
      SUB.innerText = "-";
      SUB.style.height = "100%";
      SUB.style.aspectRatio = "1/1";
      SUB.style.border = "none";

      const COUNT = document.createElement("div");
      COUNT.style.display = "flex";
      COUNT.style.height = "100%";
      COUNT.style.aspectRatio = "1/1";
      COUNT.style.justifyContent = "center";
      COUNT.style.alignItems = "center";
      COUNT.style.fontSize = "1em";
      this.count = JSON.parse(window.localStorage.getItem("cart")!)[product["id"]] || "0";
      COUNT.innerText = this.count;

      CARD_CONTROL.appendChild(SUB);
      CARD_CONTROL.appendChild(COUNT);
      CARD_CONTROL.appendChild(ADD);
      

      CARD.appendChild(CARD_TITLE);
      CARD.appendChild(CARD_PRICE);
      CARD.appendChild(ADD_TO_CART);
      CARD.appendChild(CARD_CONTROL);
      // CARD.style.alignItems = "center";
      (MAIN as HTMLElement).appendChild(CARD);

      ADD.addEventListener("click", () => {
        this.productService.incrementInCart(product["id"]);
        this.count = JSON.parse(window.localStorage.getItem("cart")!)[product["id"]] || "0";
        COUNT.innerText  = this.count;
      });

      SUB.addEventListener("click", () => {
        this.productService.decrementInCart(product["id"]);
        this.count = JSON.parse(window.localStorage.getItem("cart")!)[product["id"]] || "0";
        COUNT.innerText = this.count;
        if(this.count == "0"){
          this.productService.removeFromCart(product["id"]);
          window.location.reload();
        }
      });

    });
  }
}
