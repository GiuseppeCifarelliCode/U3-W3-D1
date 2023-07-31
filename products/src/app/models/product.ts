import { Profile } from "./profile";

export class Product implements Profile{

  limit!:number
  skip!:number
  total!:number
  products!: [{ id: number; title: string; description: string; price: number; discountPercentage: number; rating: number; stock: number; brand: string; category: string; thumbnail: string; images: string[]; }];

  constructor(
    limit:number,
    skip:number,
    total:number,
    public id:number,
    public title:string,
    public description:string,
    public price:number,
    public discountPercentage:number,
    public rating:number,
    public stock:number,
    public brand:string,
    public category:string,
    public thumbnail:string,
    public images:string[]
    ){
      this.limit = limit
      this.skip = skip
      this.total = total
    }
}
