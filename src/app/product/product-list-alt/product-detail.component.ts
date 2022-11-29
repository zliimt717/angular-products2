import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { Supplier } from 'src/app/suppliers/supplier';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent{

  pageTitle='Product Detail';
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

  constructor(private productService:ProductService) { }


}
