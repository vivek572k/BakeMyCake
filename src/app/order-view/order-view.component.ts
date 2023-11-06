import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { Order } from '../model/order';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderService } from '../services/order.service';
import { DatePipe } from '@angular/common';
import { RouteService } from '../services/route.service';


@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {

  product: Product={
    id: 0,
    productName: '',
    category: '',
    
    unit: '',
    rating: 0,
    description: ''
  }

  order: Order = {
    totalAmount: 0,
    productName: "",
    id: 0,
    customerName: undefined,
    customeremail: '',
    date: new Date(),
    customerstreet: '',
    cusomercity: '',
    customerstate: ''
  }

  minDate: Date = new Date();
  constructor(private activateroute: ActivatedRoute, private productService: ProductService, private snackBar: MatSnackBar, private orderService: OrderService,private routeService:RouteService) {
    this.minDate.setDate(this.minDate.getDate());
    
  }


  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((data) => {
      let id = data.get('id') ?? 0
      console.log(id);
      
      this.productService.getOrder(+id).subscribe((orderdata) => {
        this.product = orderdata;
      })
    })
  }

  calculateTotalAmount() {
    let quantity = this.order.quantity;
    if (this.product.price != undefined && quantity >= 0) {
      this.order.totalAmount = quantity * this.product.price;
    }
  }


  submitStatus:boolean=false;
  orderRequest() {
    if (this.order.customerName && this.order.phoneNumber && this.order.customeremail && this.order.date) 
      this.order.productName = this.product.productName;
      this.order.price = this.product.price;

      this.orderService.addOrders(this.order).subscribe((data) => {
        this.snackBar.open('Order Placed Successsfully', 'success', {
          duration: 5000
        })
        this.submitStatus=true;
        this.routeService.navigateToHomeView();
      },
        error => {
          alert('failed to Place order')
        }
      )
    
  }
  canDeactivate(){
    if(!this.submitStatus){
      this.submitStatus= confirm('Are you sure want to leave the page without submitting')
      return this.submitStatus
    }
    return true;
  }

}





 











































