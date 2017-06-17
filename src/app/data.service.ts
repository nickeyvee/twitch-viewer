import { Injectable } from "@angular/core";
import { Http, Jsonp, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private URL: string = "https://api.twitch.tv/kraken/";
    private streams: string = "streams/"
    private users: string = "users/"
    private callback: string = "?client_id=75d3ro6frttsp0kmj24osvylzyib5db";
    default: string[] = [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb","comster404","brunofin", "adobe"];


    constructor( private jsonp: Jsonp, private http: Http ) { }

    getStreams( channel: string ) {
        const urlStream: string = this.URL + this.streams + channel + this.callback;

        return this.http.get( urlStream ).map(
            ( response: Response ) => response.json()
            ,
            error => {
                if( error.status === 422 ) {
                    console.log( channel + " does not exist!");
                } else if ( error.status === 404 ) {
                    console.log( channel + " was not found!");
                }
            }
        )
    }

    getUsers( channel: string ) {
        const urlUsers: string = this.URL + this.users + channel + this.callback;

        return this.http.get( urlUsers ).map(
            ( response: Response ) => response.json()
            ,
            error => {
                if( error.status === 422 ) {
                    console.log( channel + " does not exist!");
                } else if ( error.status === 404 ) {
                    console.log( channel + " was not found!");
                }
            }
        )
    }
}
