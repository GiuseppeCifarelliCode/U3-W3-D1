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
  favourites:Profile[] = []
  addButton:string = "Add To Cart"
  favouriteButton:string = "Add To Favourites"

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.productSvc.getAllProducts()
    .subscribe(res => {this.allProducts = res.products
      console.log(res);

    })
  }

  addToCart(product:Profile){
    if(this.cart.includes(product)) {
      this.cart = this.cart.filter(prod => prod !== product)
    } else {
      this.cart.push(product)
    this.addButton = "Remove From Cart"
    }
  }

  addToFavourites(product:Profile){
    if(this.productSvc.favourites.includes(product)){
      this.productSvc.favourites = this.productSvc.favourites.filter(prod => prod != product)
      this.favourites = this.productSvc.favourites
      this.favouriteButton = "Add To Favourites"
    } else {
      this.productSvc.favourites.push(product)
      this.favourites = this.productSvc.favourites
      this.favouriteButton = "Remove From Favourites"
    }
  }

}

