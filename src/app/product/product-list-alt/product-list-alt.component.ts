import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListAltComponent{

  pageTitle='Products';
  errorMessage='';

  products$=this.productService.productsWithCategory$
  .pipe(
    catchError(err=>{
      this.errorMessage=err;
      return EMPTY;
    })
  );

  selectedProduct$=this.productService.selectedProduct$;

  constructor(private productService:ProductService) { }

  onSelected(productId:number): void{
    this.productService.selectedProductChanged(productId);
  }


}
