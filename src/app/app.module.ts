import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './users/user/user.component';
import { TabsComponent } from './tabs/tabs.component';

import { DataService } from "app/data.service";
import { UsersComponent } from "app/users/users.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UsersComponent,
    UserComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
