import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  filter: string = "";
  constructor(private productService: ProductService) { }
  @Output() filterEvent = new EventEmitter();
  click() {
    this.filterEvent.emit(this.filter)

  }
}
