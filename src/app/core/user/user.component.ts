import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { USERS } from 'src/app/models/mock.data';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  changePage:boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }
  users = USERS;

 delete(u:string) {
   this.users = this.users.filter(users => users.id !== u)
 }

 showCardView(value:string): void {
  if(value === 'List View') {
    this.changePage = true;
  } else {
    this.changePage = false;
  }
}

}
