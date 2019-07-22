import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TableComponent } from '../table/table.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { ItemsComponent } from 'src/Items/item.component';
import { DeliveryComponent } from 'src/delivery/delivery.component';
import { ContactComponent } from '../contact/contact.component';
import { ErrorComponent } from '../error/error.component';
import {RatingComponent} from '../rating/rating.component'; 

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, TableComponent, LoginComponent, RegisterComponent, ItemsComponent, DeliveryComponent, ContactComponent, ErrorComponent, RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

