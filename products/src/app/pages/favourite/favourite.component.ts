import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {

  favourites:Profile[] = []

  constructor(private productSvc:ProductsService){}

  ngOnInit(){
    this.favourites = this.productSvc.favourites
  }
}
