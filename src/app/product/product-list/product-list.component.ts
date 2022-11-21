import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductCategory } from 'src/app/product-categories/product-category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle:string='Product List';
  errorMessage='';
  categories:ProductCategory[]=[];

  products:Product[]=[];
  sub!:Subscription;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.sub=this.productService.getProducts()
    .subscribe({
      next:products=>this.products=products,
      error:err=>this.errorMessage=err,
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  onAdd(): void{
    console.log('Not yet implement');
  }

   onSelected(categoryId:string):void{
     console.log('Not yet implement');
  }

}
