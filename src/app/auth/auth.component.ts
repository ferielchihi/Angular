import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }
  authStatus : any;

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn(){
    this.authService.signIn().then(()=> {
      console.log('connexion réussie ! ');
      this.authStatus = this.authService.isAuth;
    });
  }
  onSignOut(){
    this.authService.signOut();
      this.authStatus = this.authService.isAuth;
  }
}
