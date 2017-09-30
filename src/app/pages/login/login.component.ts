import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenthicationService } from "./../../services/authenthication.service" 
@Component({
    selector:'login',
    template:`
    <div class="login">
        <div class="login-header">User list</div>
        <div class="login-container">
            <div class="login-sub-container">
                <div>
                    <div>Username</div>
                    <input type="text" [(ngModel)] = "model.username" />
                </div>
                <div class="margin-1">
                    <div>Password</div>
                    <input type="password"  [(ngModel)] = "model.password" />
                </div>
                <button class="btn btn-primary" (click)="onClick($event)" >login</button>
            </div>
        </div>
    </div>
    `
})

export class LoginComponent {
    model:any = {};
    constructor(
        private router:Router,
        private authenthication:AuthenthicationService){}

    onClick(event:any){
        this.authenthication.login(this.model.username,this.model.password)
            .subscribe((result)=>{
                result && this.router.navigate(['home']);
            });
        
    }
}