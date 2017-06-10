import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";

@Injectable()
export class DataService {
    URL: string = "https://api.twitch.tv/kraken/";
    streams: string = "streams/"
    users: string = "users/"
    default: string[] = [ "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb","comster404","brunofin", "adobe"];
    callback: string = "?client_id=75d3ro6frttsp0kmj24osvylzyib5db";


    constructor(  private jsonp: Jsonp ) { }

    getStreams( channel: string ) {
        const urlStream: string = this.URL + this.streams + channel + this.callback;

        return this.jsonp.get( urlStream ).subscribe(
            res  => res.json(),
            error => console.log( error )
        )
    }

    getUsers( channel:string ) {
        const urlUsers: string = this.URL + this.users + channel + this.callback;
        console.log( urlUsers );

        return this.jsonp.get( urlUsers ).subscribe(
            res  => res.json(),
            error => console.log( error )
        )
    }
}
