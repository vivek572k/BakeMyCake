import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="http://localhost:3000/products"
  constructor(private http:HttpClient) { }

  getproducts():Observable <Product[]>
  {
   return this.http.get<Product[]>(this.url);
  }
  getOrder(id:any):Observable <Product>{
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
