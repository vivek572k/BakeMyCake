import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }

  navigateToHomeView() {
    this.router.navigate([""]);
  }
  navigateToOrderListView() {
    this.router.navigate(["cakelist"]);
  }
  navigateToLoginView() {
    this.router.navigate(["login"]);
}
}
