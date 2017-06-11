import { Component , OnInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from 'app/users/users.component';
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
  
  constructor( ) { }  


  ngOnInit () {

  }
}
