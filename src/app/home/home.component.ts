import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getproducts().subscribe((data) => {
      this.products = data;
    },
      erro => {
        alert("something went wrong while fetching data from the server")
      }
    )
  }

  onSearch(searchText: string) {
    if (searchText === '') {
      this.products = this.products
    }
    this.productService.getproducts().subscribe((data) => {
      this.products = data.filter(product => product.productName?.toLowerCase().includes(searchText.toLowerCase()))
    })
  }
  onClick(value: any) {
    this.productService.getproducts().subscribe((data) => {
      if (value == "") {
        this.products = data;
      }
      else {
        this.products = data.filter((f) => f.category?.toLowerCase().startsWith(value.toLowerCase()))
      }

    },
      error => {
        alert(error)
      }
    )

  }

}
