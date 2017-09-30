
import { Injectable } from "@angular/core";
import { Http, Request, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenthicationService {
    public token:string;
    constructor(private http:Http){
        this.token = null;
    }

    login(username:string, password:string) : Observable<boolean>{
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/api/authenticate",JSON.stringify({username,password}),{headers})
        .map((response:Response) =>{
            this.token = this.token || (response.json() && response.json().token);
            return this.token ? true: false;
        })
    }
    logout() : void {
        this.token = null;
    }

}