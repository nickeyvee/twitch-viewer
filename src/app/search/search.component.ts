import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
    #search {
        border-radius: 0;
        padding: 10px;
    }
    input {
        border-radius: 5px;
        border: solid grey 1px;
    }
    form {
      margin-left: 60px;
    }
  `]
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
