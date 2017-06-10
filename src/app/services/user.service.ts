import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
    export class UserService implements OnInit {

    constructor( private http: Http ) { }

    ngOnInit() {
        // console.log( "fetched default user info" );
        // for( let user of this.default ) {

        //     let userStatus: boolean;
        //     let userName: string;
        //     let activity: string;
        //     let logo: string;

        //     console.log( user );

        //     this.http.get( this.stream + user + this.cb )
        //     .subscribe(
        //         response => console.log( response ),
        //         error => console.log( error )
        //     )
        // }
    }
}