import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  products: any[] = JSON.parse(window.localStorage.getItem("productData")!);
  cart: {} = JSON.parse(window.localStorage.getItem("cart")!);
  constructor() {

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
    else {
      this.products = JSON.parse(window.localStorage.getItem("productData")!);
    }

    if(window.localStorage.getItem("cart") === null){
      let cart = {};
      window.localStorage.setItem("cart",JSON.stringify(cart));
    }
    else{
      this.cart = JSON.parse(window.localStorage.getItem("cart")!);
    }
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string):any {
    console.log(id);
    return this.products.filter(item => {
      if (item.id == id) {
        console.log(typeof(item));
        console.log("is the item")
        return item;
      }
    });

  }
  addProduct(name: string, price: string) {
    let productData = JSON.parse(window.localStorage.getItem("productData")!);
    let id = productData.length + 1;
    let product = { "id": id, "name": name, "price": price };
    this.products.push(product);
    window.localStorage.setItem("productData", JSON.stringify(this.products));
  }

  updateProductbyId(id: string, name: string, price: number){
    let productData : any[] = JSON.parse(window.localStorage.getItem("productData")!);
    let idx = productData.findIndex(obj => obj.id == id);
    productData[idx]['name'] = name;
    productData[idx]['price'] = price;
    window.localStorage.setItem("productData",JSON.stringify(productData));
    
    window.location.reload();

  }

  addToCart(id: string){
    let cart = JSON.parse(window.localStorage.getItem("cart")!);
    if(!cart.hasOwnProperty(id)){
      cart[id] = 1;
    }
    window.localStorage.setItem("cart",JSON.stringify(cart));
  }

  incrementInCart(id: string){
    let cart = JSON.parse(window.localStorage.getItem("cart")!);
    if(!cart.hasOwnProperty(id)){
      cart[id] = 0;
    }
    cart[id] += 1;
    window.localStorage.setItem("cart",JSON.stringify(cart));
  }

  decrementInCart(id: string){
    let cart = JSON.parse(window.localStorage.getItem("cart")!);
    if(!cart.hasOwnProperty(id)){
      //continue
    }
    else{
      cart[id] -= 1;
      window.localStorage.setItem("cart",JSON.stringify(cart));
      if(cart[id] == 0){
        this.removeFromCart(id);
      }
    }
  }

  removeFromCart(id: string){
    let cart = JSON.parse(window.localStorage.getItem("cart")!);
    delete cart[id];
    window.localStorage.setItem("cart",JSON.stringify(cart));
  }

  getAllInCart(){
    let cart = JSON.parse(window.localStorage.getItem("cart")!);
    return this.products.filter(product => {
      return Object.keys(cart).includes(String(product["id"]));
    })
  }
}
