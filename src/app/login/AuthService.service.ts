import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(usuario:string, senha:string):void{
    if(usuario=="leonardo" && senha == "123"){

  }

}

}
