import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrarPageComponent } from './pages/registrar-page/registrar-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    title: 'Login'
  },
  {
    path: 'criarConta',
    component: RegistrarPageComponent,
    title: 'Crie sua conta!'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
