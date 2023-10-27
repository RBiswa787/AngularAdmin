import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
 
  count : string = "0";
  constructor(private productService: ProductsServiceService){
    
  }

  ngOnInit(){
    this.populateMarket();
  }

  populateMarket(){
    const MAIN  = document.getElementById("content-market");
    let productData = this.productService.getAllProducts();
    console.log(productData);
    productData.forEach(product => {
      const CARD = document.createElement("div");
      CARD.style.display = "flex";
      CARD.style.width = "12em";
      CARD.style.height = "15em";
      CARD.style.backgroundColor = "white";
      CARD.style.borderRadius = "10px";
      CARD.style.alignItems = "center";
      CARD.style.flexDirection = "column";
      CARD.style.paddingTop = "3%";

      const CARD_TITLE = document.createElement("div");
      CARD_TITLE.style.display = "flex";
      CARD_TITLE.style.width = "100%";
      CARD_TITLE.style.height = "15%";
      CARD_TITLE.style.justifyContent = "center";
      CARD_TITLE.style.alignItems = "center";
      CARD_TITLE.style.fontSize = "1.2em";
      CARD_TITLE.style.marginTop = "10%";
      CARD_TITLE.innerText = product['name'];

      const CARD_PRICE = document.createElement("div");
      CARD_PRICE.style.display = "flex";
      CARD_PRICE.style.width = "100%";
      CARD_PRICE.style.height = "15%";
      CARD_PRICE.style.justifyContent = "center";
      CARD_PRICE.style.alignItems = "center";
      CARD_PRICE.style.fontSize = "0.9em";
      CARD_PRICE.style.fontStyle = "italic";
      CARD_PRICE.style.marginTop = "1.5%";
      CARD_PRICE.innerText = "Rs." + product['price'];

      const ADD_TO_CART = document.createElement("button");
      ADD_TO_CART.style.display = "flex";
      ADD_TO_CART.style.width = "65%";
      ADD_TO_CART.style.height = "15%";
      ADD_TO_CART.style.justifyContent = "center";
      ADD_TO_CART.style.alignItems = "center";
      ADD_TO_CART.style.backgroundColor = "white";
      ADD_TO_CART.style.border = "1px solid black";
      ADD_TO_CART.style.borderRadius = "10px";
      ADD_TO_CART.innerText = "Add to cart";
      ADD_TO_CART.style.fontSize = "0.9em";
      ADD_TO_CART.style.marginTop = "15%";
      ADD_TO_CART.style.marginBottom = "3%";

      ADD_TO_CART.addEventListener("click", () => {
        this.productService.addToCart(product["id"]);
        this.count = JSON.parse(window.localStorage.getItem("cart")!)[product["id"]]|| "0";
        COUNT.innerText = this.count;
      });

      const CARD_CONTROL = document.createElement("div");
      CARD_CONTROL.style.display = "flex";
      CARD_CONTROL.style.width = "40%";
      CARD_CONTROL.style.height = "15%";
      // CARD_CONTROL.style.border = "1px solid black";
      CARD_CONTROL.style.marginTop = "5%";
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
      });

    });
  }
}
