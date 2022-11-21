import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'welcome',component:WelcomeComponent},
    {
      path:'products',
      loadChildren: ()=>
       import('./product/product.module').then(m=>m.ProductModule)
    },
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'***',component:PageNotFoundComponent}
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
