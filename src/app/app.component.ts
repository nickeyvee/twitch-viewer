import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
export class AppComponent {

}
