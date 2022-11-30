import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, EMPTY, map, startWith, Subject, Subscription } from 'rxjs';
import { ProductCategory } from 'src/app/product-categories/product-category';
import { ProductCategoryService } from 'src/app/product-categories/product-category.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  pageTitle:string='Product List';
  errorMessage='';
  
  private categorySelectedSubject=new BehaviorSubject<number>(0);
  categorySelectedAction$=this.categorySelectedSubject.asObservable();

  products$=combineLatest([
    this.productService.productsWithAdd$,
    this.categorySelectedAction$
    // .pipe(
    //   startWith(0)
    // )
  ]) 
  .pipe(
    map(([products,selectedCategoryId])=>
    products.filter(product=>
      selectedCategoryId?product.categoryId===selectedCategoryId:true
      )),
      catchError(err=>{
        this.errorMessage=err;
        return EMPTY;
      })
  );

  categories$=this.productCategoryService.productCategories$
  .pipe(
    catchError(err=>{
      this.errorMessage=err;
      return EMPTY;
    })
  );
 
  constructor(private productService: ProductService,
    private productCategoryService:ProductCategoryService) { }
  
  
  onAdd(): void{ 
    this.productService.addProduct();
  }

   onSelected(categoryId:string):void{
     this.categorySelectedSubject.next(+categoryId);
  }

}
