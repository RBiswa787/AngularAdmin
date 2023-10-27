import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  public id : string = "0";
  name : string= "";
  price : string = "";
  public productData : FormGroup;

  constructor(private route: ActivatedRoute, private productService : ProductsServiceService){

    this.productData= new FormGroup({
      'name' : new FormControl(''),
      'price' : new FormControl('')
    });
   

    route.params.subscribe((params) => {
      this.id = params["id"];
      let data = this.productService.getProductById(params["id"]);
      this.name = data[0]['name'];
      this.price = data[0]['price'];
    });
  }

  ngOnInit(){
   console.log("Detect Init");

   const header = document.getElementById("header");
   (header as HTMLElement).addEventListener("click", () => {
    this.productService.updateProductbyId("1","Chocolate",90);
  });
  //  
  }

  onSubmit(){
    this.productService.updateProductbyId(this.id,this.productData.value['name'],this.productData.value['price']);
  }
  

}
