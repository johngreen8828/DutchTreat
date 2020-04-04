import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component";
import { Shop } from "./shop/shop.component";
import {Checkout} from "./checkout/checkout.component"
import { DataService } from "./shared/dataService";
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from "@angular/router";
import { Login } from './Login/login.component';
import { FormsModule } from "@angular/forms";

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout },
    {path: "login", component: Login}
];
    
@NgModule({
    declarations: [
        AppComponent,
        ProductList,
        Cart,
        Shop,
        Checkout, 
        Login
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
