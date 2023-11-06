import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="http://localhost:3001/order";
  constructor(private http:HttpClient) {}

  addOrders(data:Order):Observable <Order>
  {
    return this.http.post<Order>(`${this.url}`,data);
  }

  getOrders():Observable <Order[]>
  {
    return this.http.get<Order[]>(`${this.url}`);
  }
}
