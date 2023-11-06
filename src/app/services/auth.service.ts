import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn:boolean 

  login(adminCode:string){
    this.isLoggedIn = adminCode == 'Vk@2000'
    this.isLoggedIn=true;
  }

  logout(){
    this.isLoggedIn=false
  }

}
