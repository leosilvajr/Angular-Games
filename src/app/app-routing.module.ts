import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : 'inicio', component: InicioComponent },
  { path : 'login', component: LoginComponent },
  { path : '', redirectTo: '/inicio', pathMatch: 'full'} //Padrao caso link esteja errado.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
