import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'login',
    template:`
    <div class="login">
        <div class="login-header">User list</div>
        <div class="login-container">
            <div class="login-sub-container">
                <div>
                    <div>Username</div>
                    <input type="text" />
                </div>
                <div class="margin-1">
                    <div>Password</div>
                    <input type="password" />
                </div>
                <button class="btn btn-primary" (click)="onClick($event)" >login</button>
            </div>
        </div>
    </div>
    `
})

export class LoginComponent {
    private router:Router = null;
    constructor(router:Router){
        this.router = router;
    }
    onClick(event:any){
        this.router.navigate(['home']);
    }
}