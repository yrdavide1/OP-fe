import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Token } from "../models/token";

@Injectable({
    providedIn: 'root'
})
export class TokenService{
    private baseTokenUrl = "http://localhost:4200/api/token";

    constructor(private http: HttpClient){ }

    public getTokenById(id: number): Observable<Token>{
        return this.http.get<Token>(`${this.baseTokenUrl}/id?id=${id}`);
    }
}