import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  adminCode:string=""

  constructor(private authServie:AuthService,private routeService: RouteService){}

  validateAdminCode(){
    this.authServie.login(this.adminCode);
    if(this.authServie.isLoggedIn){
      this.routeService.navigateToOrderListView();
    }
  }

  

}
