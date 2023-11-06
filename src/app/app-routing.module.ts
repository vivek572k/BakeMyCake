import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CakeRequestComponent } from './cake-request/cake-request.component';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"request/:id",component:OrderViewComponent,canDeactivate:[canDeactivateGuard]},
  {path:"login",component:LoginComponent},
  {path:"cakelist",component:CakeRequestComponent,canActivate:[authGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
