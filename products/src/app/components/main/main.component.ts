import { Component, Output } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  allProducts!:Profile[]
  cart:Profile[] = []
  addButton:string = "Add To Cart"

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.productSvc.getAllProducts()
    .subscribe(res => {this.allProducts = res.products
      console.log(this.allProducts);
    })
  }

  addToCart(product:Profile){
    if(this.cart.includes(product)) {
      this.addButton = "Remove From Cart"
    } else {
      this.cart.push(product)
    console.log(this.cart);
    this.addButton = "Remove From Cart"
    }
  }

}

