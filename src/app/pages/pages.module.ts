import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { RegistrarPageComponent } from './registrar-page/registrar-page.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MenssagenFeedbackComponent } from './components/menssagen-feedback/menssagen-feedback.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    ButtonComponent,
    RegistrarPageComponent,
    MenssagenFeedbackComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    MatCardModule
  ]
})
export class PagesModule { }
