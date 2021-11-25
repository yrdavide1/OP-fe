import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Token } from "../models/token";

@Injectable({
    providedIn: 'root'
})
export class TokenService{
    private baseTokenUrl = `${environment.baseUrl}/token`;

    constructor(private http: HttpClient){ }

    public getTokenById(id: number): void{
        this.http.get<Token>(`${this.baseTokenUrl}/id?id=${id}`)
                        .subscribe({
                            next: data => {
                                console.log(<Token>data);
                                localStorage.setItem('sessionToken', data.sessionToken);
                            },
                            error: err =>{
                                alert("Error! Check console for more info about it");
                                console.log(err);
                            }
                        });
    }
}