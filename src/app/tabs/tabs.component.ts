import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
   @Input("users") user: { name: string }
   @Input("current") tab: string = "all";

  constructor() { }

  ngOnInit() {
  }

  onTabChange( element ) {
    console.log( element.toElement.id );
    this.tab = element.toElement.id;
  }
}
