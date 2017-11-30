import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListUsersProxyService } from './list-users/list-users-proxy.service';
import { ListUsersService } from './list-users/list-users.service';
import { NgModule } from '@angular/core';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ListUsersService, ListUsersProxyService],
  bootstrap: [ListUsersComponent]
})
export class AppModule { }