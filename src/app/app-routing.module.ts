import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { RegistrationComponent } from 'src/app/components/shared/header/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from 'src/app/components/shared/header/sign-in/sign-in.component';
import {receiptComponent} from 'src/app/components/orders page/receipt/receipt.component';
import { SearchBarComponent } from 'src/app/components/search/search-bar/search-bar.component';
import { ShoppingListComponent } from 'src/app/components/home/2ndsectionshopping/shopping-list.component';
import { BlogComponent } from 'src/app/components/shared/header/blog/blog.component';
import { ReadMoreComponent } from 'src/app/components/home/4thsectionreview/read-more/read-more.component';
import { OrdersComponent } from 'src/app/components/orders page/orders.page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateProductComponent } from 'src/app/components/dashboard/create-product/create-product.component';
import { EditProductComponent } from 'src/app/components/dashboard/edit-product/edit-product.component';
import { BuyNowComponent } from 'src/app/components/home/1stsectionSlider/buy-nowBtn/buy-now.component';
import { AboutUsComponent } from 'src/app/components/shared/header/about-us/about-us.component';
import { SearchresultComponent } from 'src/app/components/search/search-bar/searchresult/searchresult.component';
import { CartComponent } from 'src/app/components/shared/header/cart/cart.component';


const routes = [
  {path:'', component: HomeComponent },
  {path:'products',component:ProductsComponent,canActivate: [AuthGuard]},
  {path:'login',component:SignInComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'signin', component:SignInComponent},
  {path:'receipt', component:receiptComponent },
  { path:'search', component:SearchBarComponent },
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'readmore', component: ReadMoreComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editproduct', component: EditProductComponent },
  { path: 'createproduct', component: CreateProductComponent },
  { path: 'buynow', component: BuyNowComponent },
  {path: 'searchresult', component: SearchresultComponent },
  {path: 'aboutus', component: AboutUsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
