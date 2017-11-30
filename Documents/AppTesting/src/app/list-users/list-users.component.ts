import { ListUsersService } from './list-users.service';
import { User } from './user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  users: User[];

  subs: Subscription;

  existe : boolean;

  result: Object;
  constructor(private service: ListUsersService) { 
    this.result =  {
      encontrado: '',
      foundUser : {
        login : '',
        url: ''
      }
    },
    this.existe = false
  }

  ngOnInit() {
    this.subs = this.service.getUsers().subscribe();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUser(nombreUsuario : string): any{
    if(nombreUsuario == '' || nombreUsuario == null || nombreUsuario == undefined){
      return null;
    }

    this.subs = this.service.getUsers()
    .subscribe(users => 
      {
        for(var i = 0; i < users.length; i++){
          if(users[i].login == nombreUsuario){
            this.result = {
              encontrado: "Datos del usuario de Git:",
              foundUser : {
                login : users[i].login,
                url: users[i].url
              }

            }
            this.existe = true;
          }
        }

        if(!this.existe){
          this.result ={
            encontrado: "El usuario no existe",
            foundUser : {
              login : '',
              url: ''
            }
          };
        }

        return this.result;
    });
  }

}