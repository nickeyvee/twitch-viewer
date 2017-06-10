import { Component , OnInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ DataService ],
  styles: [`
  .container-fluid {
    width: 400px;
    padding: 0;
    box-shadow: 2px 2px 8px grey;
  }
  h2 {
    text-align: center;
  }
  `]
})

export class AppComponent implements OnInit {

  channelNames: string [];
  getUserList: any;
  getStreamsList: any;
  
  constructor( private dataService: DataService ) {
    this.channelNames = this.dataService.default;
    this.getUserList = this.dataService.getStreams;
    this.getStreamsList = this.getStreamsList;
  }


ngOnInit () {
    console.log( "fetched default user info" );
    for( let user of this.channelNames ) {

        let userStatus: boolean;
        let userName: string = user;
        let activity: string;
        let logo: string;

        console.log( user );
        
        this.dataService.getUsers( userName );
    }
  }
}
