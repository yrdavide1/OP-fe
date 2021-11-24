import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private userLoginUrl = "http://173.249.39.182/api/user/login?"; //add username and password as query params

    constructor(private http: HttpClient){ }

    userSignIn(username: string, password: string): Observable<User>{
        return this.http.post<User>(`${this.userLoginUrl}username=${username}&password=${password}`, {});
    }
}