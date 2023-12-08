import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './AuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = '';
  usuario!: string;
  senha!: string;

  constructor(private authService: AuthService, private router: Router) {}

  fazerLogin(){
    if (this.usuario=="leonardo" && this.senha == "123") {
      this.router.navigate(['/inicio']);    
    } else{
      this.error = "Usuário ou senha inválido.";
    }
  }
}
