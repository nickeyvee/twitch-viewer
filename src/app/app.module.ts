import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { TabsComponent } from './tabs/tabs.component';

import { UserService } from "app/services/user.service";
import { DataService } from "app/data.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    CockpitComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
