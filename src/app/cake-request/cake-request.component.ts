import { Component } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../services/order.service';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';




@Component({
  selector: 'app-cake-request',
  templateUrl: './cake-request.component.html',
  styleUrls: ['./cake-request.component.css']
})
export class CakeRequestComponent  {
  displayedColumns: string[] = ['S No', 'customerName','productName', 'dateOfOrder', 'price', 'quantity', 'TotalAmount'];
  cakeRequest: Order[] = [];
  constructor(private orderService: OrderService, private authService: AuthService, private routeService: RouteService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe((data) => {
      this.cakeRequest = data;
    },
      error => {
        alert(error)
      }
    )
  }
  
}


