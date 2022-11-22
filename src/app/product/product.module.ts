import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductListAltComponent } from './product-list-alt/product-list-alt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-list-alt/product-detail.component';
import { ProductShellComponent } from './product-list-alt/product-shell.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductShellComponent,
    ProductListAltComponent,
    ProductDetailComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'', 
        component:ProductListComponent
      },
      {
        path:'alternate',
        component:ProductShellComponent
      }
    ])
  ]
})
export class ProductModule { }
