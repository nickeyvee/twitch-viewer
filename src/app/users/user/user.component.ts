import { Component, OnInit, Input } from '@angular/core';
import { UserSchema } from "app/models/user.model";
import { UsersComponent } from "app/users/users.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: UserSchema[];
  // will recive individual names from the parent component
  constructor( private usersComponent: UsersComponent ) {
    this.userList= usersComponent.allUsersList;
  }
  
  ngOnInit(): void {
    
  }
}
