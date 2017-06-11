import { UserComponent } from './user/user.component';
import { OnInit, Component } from "@angular/core";
import { DataService } from "app/data.service";
import { UserSchema } from "app/models/user.model";

@Component({
  selector: 'app-users',
  providers: [ DataService ],
  template: `<h2> Users component works! </h2>`
})

export class UsersComponent implements OnInit {
  channelNames: string [];
  userList: UserSchema[] = [];
  
  constructor( private dataService: DataService ) {
    this.channelNames = this.dataService.default;
  }

logResults( item : any ) {
  console.log( item );
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
          console.log( data )
          console.log(
             "stream : " + data.stream + "\n" +
             "is streaming? : " + data.stream === null + "\n" +
             "typeof 'null' : ", typeof data.stream
          );

          if ( data.stream ) {
            isActive = true; 
            activity = data.stream.game;
          } else 
            isActive = false;
            activity = "offline";
        }
      )
      this.dataService.getUsers( user ).subscribe(
        data => {
          //console.log( data )
          userName = data.display__name;
          logo = data.logo;
        }
      )
      this.userList.push({
        userName,
        isActive,
        activity,
        logo
      })
    }
    this.logResults( this.userList );
  }
}
