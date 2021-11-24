import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private loginService: LoginService,
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
      next: data => {
        console.log(data);
        this.router.navigate(['welcome']);
      }, 
      error: err => {
        alert(err);
      }
    });
  }

}