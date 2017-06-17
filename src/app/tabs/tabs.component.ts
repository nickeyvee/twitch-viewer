import { Component, OnInit, Input } from '@angular/core';
import { UsersComponent } from "app/users/users.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [ UsersComponent ]
})
export class TabsComponent implements OnInit {
  @Input("current") tab: string = "all";
  userStatusMethod;

  constructor( public usersComponent: UsersComponent ) {
    this.userStatusMethod = usersComponent.onTabChange;
  }

  ngOnInit() {
  }

  onTabChange( element ) {
    //console.log( element.toElement.id );
    this.tab = element.toElement.id;

    this.userStatusMethod( element.toElement.id );
  }
}
