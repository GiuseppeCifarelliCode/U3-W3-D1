import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { Profile } from './models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
includes(_t7: Profile) {
throw new Error('Method not implemented.');
}

  url!:string
  favourites:Profile[] = []

  constructor( private http:HttpClient) {
    this.url = 'https://dummyjson.com/products'
  }

  getAllProducts():Observable<Product>{
    return this.http.get<Product>(this.url)
  }

}
