import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, combineLatest, EMPTY, filter, map } from 'rxjs';
import { Supplier } from 'src/app/suppliers/supplier';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent{
  errorMessage='';
  productSuppliers:Supplier[]|null=null;

  product$=this.productService.selectedProduct$
  .pipe(
    catchError(
      err=>{
        this.errorMessage=err;
        return EMPTY;
      }
    )
  );

  pageTitle$=this.product$
  .pipe(
    map(p=>p?`Product Detail for:${p.productName}`:null)
  );

  productSuppliers$=this.productService.selectedProductSupplier$
  .pipe(
    catchError(
      err=>{
        this.errorMessage;
        return EMPTY;
      })
  );

  vm$=combineLatest([
    this.product$,
    this.productSuppliers$,
    this.pageTitle$
  ])
  .pipe(
    filter(([product])=>Boolean(product)),
    map(([product,productSuppliers,pageTitle])=>({product,productSuppliers,pageTitle}))
  );

  constructor(private productService:ProductService) { }


}
