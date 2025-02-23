import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"**", redirectTo:"products" , pathMatch:"full"},
  {path: "login", component: UserLoginComponent},
  {path: "signup", component: UserLoginComponent},
  {path:" ", redirectTo:"/login" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
