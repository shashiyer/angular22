import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import {NavbarComponent} from '../navbar/navbar.component'
import { TableComponent } from '../table/table.component';
import { RegisterComponent } from '../register/register.component';
import { ItemsComponent } from 'src/Items/item.component';
import { DeliveryComponent } from 'src/delivery/delivery.component';
import { ContactComponent } from '../contact/contact.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
{ path: 'login', component:LoginComponent},
{ path: 'navbar', component:NavbarComponent},
{ path: 'table', component:TableComponent},
{ path: 'register', component:RegisterComponent },
{path: 'items', component: ItemsComponent},
{path: 'delivery', component: DeliveryComponent},
{path: 'contact', component: ContactComponent},
{path: '**', component: ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
