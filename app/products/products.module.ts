import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports: [
    AllProductsComponent,
    ProductsComponent
  ]
})
export class ProductsModule { }
