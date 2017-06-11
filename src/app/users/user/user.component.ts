import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input("usernames") user: { name: string };
  // will recive individual names from the parent component
  //@Input("usernames") user: { name: string };
  constructor( ) { }

}
