import { UserComponent } from './user/user.component';
import { OnInit, Component } from "@angular/core";
import { DataService } from "app/data.service";
import { UserSchema } from "app/models/user.model";

@Component({
  selector: 'app-users',
  providers: [ DataService ],
  templateUrl: "/users.component.html"
})

export class UsersComponent implements OnInit {
  channelNames: string [];
  allUsersList: UserSchema[] = [];
  filteredList: UserSchema[];

  constructor( private dataService: DataService ) {
    this.channelNames = this.dataService.default;
  }

logResults() {
  return console.log( this.allUsersList );
}


ngOnInit () {
  console.log( "fetched default user info" );
  for( let user of this.channelNames ) {

      let userName : string;
      let isActive : boolean;
      let activity : string;
      let logo : string;

      this.dataService.getStreams( user ).subscribe(
        data => {

          if ( data.stream ) {
            isActive = true; 
            activity = data.stream.game;
          } else {
            isActive = false;
            activity = "offline";
          }
          this.dataService.getUsers( user ).subscribe(
            data => {
              userName = data.display_name;

              data.logo === null ? logo = "http://4.bp.blogspot.com/-Zzu7j6aQk-k/UkATzmjQqhI/AAAAAAAABBk/ofjNB5YQMLM/s1600/facebook-default--profile-pic6.jpg" 
              : logo = data.logo;

              this.allUsersList.push({
                userName,
                activity,
                isActive,
                logo
              });
            }
          )
        }
      )
    }
  }
  onTabChange( currentTab: string ) {
    console.log( currentTab );
  }
}
