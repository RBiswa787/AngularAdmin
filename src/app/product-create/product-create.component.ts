import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  name : string= "";
  price : string = "";
  public productData : FormGroup;


  constructor(private productService : ProductsServiceService){

    this.productData= new FormGroup({
      'name' : new FormControl(''),
      'price' : new FormControl('')
    });
   
  }

  onCreate(){
    this.productService.addProduct(this.productData.value['name'],this.productData.value['price']);
    alert("Product Added Successfully");
    window.location.reload();
  }
}
