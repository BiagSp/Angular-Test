import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './core/user/user.component';
import { UsersListVComponent } from './core/users-list-v/users-list-v.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { UsereOrderComponent } from './core/usere-order/usere-order.component';
import { NewUserComponent } from './core/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersListVComponent,
    NavbarComponent,
    UsereOrderComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
