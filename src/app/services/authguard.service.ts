import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(private router: Router, private loginService: LoginService){ }

    canActivate(): boolean{
        if(this.loginService.isLogged()) return true;

        else {
            console.log("Session token was not set! Redirecting to login page!");
            this.router.navigate(['login']);

            return false;
        }
    }
}