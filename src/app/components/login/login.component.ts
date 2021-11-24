import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private loginService: LoginService,
      private tokenService: TokenService,
      private router: Router
  ) {  
    document.addEventListener('keypress', (e) => {
      if(e.key === 'Enter'){
        let btn = <HTMLInputElement>(document.getElementById('submitLogin'));
        btn.click();
      }
    });
  }

  ngOnInit(): void {
  }

  userLogin(){
    let username = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    let password = (<HTMLInputElement>document.getElementById('passwordInput')).value;

    if(!username || !password) {
      alert("Both fields must be filled!");
      username = "";
      password = "";
      return;
    }

    //console.log(`${username}\n${password}`);

    this.loginService.userSignIn(username, password).subscribe({
      next: async data => {
        console.log(data);
        this.retrieveSessionToken(data.tokenId);
        this.router.navigate(['welcome']);
      }, 
      error: err => {
        alert("Error! Check console for more info about it");
        console.log(err);
      }
    });
  }

  retrieveSessionToken(id: number): void{
    this.tokenService.getTokenById(id).subscribe({
        next: data => {
          console.log(data);
          localStorage.setItem('sessionToken', data.sessionToken);
        },
        error: err => {
          alert("Error! Check console for more info about it");
          console.log(err);
        }
    });
  }

}