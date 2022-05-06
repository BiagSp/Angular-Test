import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUSERS } from 'src/app/models/data';
import { USERS } from 'src/app/models/mock.data';

@Component({
  selector: 'app-users-list-v',
  templateUrl: './users-list-v.component.html',
  styleUrls: ['./users-list-v.component.scss']
})
export class UsersListVComponent implements OnInit {

  @Output() showpage = new EventEmitter<boolean>();

  changePage:boolean = false;
  /* utenti: IUSERS[] = USERS; */
  constructor() { }

  ngOnInit(): void {
  }
  
  showCardView(value:string): void {
    if(value === 'List View') {
      this.changePage = true;
    } else {
      this.changePage = false;
    }
  }
}
