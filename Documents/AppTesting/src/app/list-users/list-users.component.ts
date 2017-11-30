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

  constructor(private service: ListUsersService) { }

  ngOnInit() {
    this.subs = this.service.getUsers().subscribe(
      users => this.users = users
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}