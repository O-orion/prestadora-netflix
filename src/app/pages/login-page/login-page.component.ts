import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide: boolean = true
  formLogin!: UntypedFormGroup;
  formInvalido: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit () {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]]
    })
  }


  public autenticar():void {

    if (this.formularioValido()) {
      const { email, senha } = this.formLogin.getRawValue()
      alert(`${email} - ${senha}`)
      this.formLogin.reset()
    }

  }

  private formularioValido(): boolean {

    if(this.formLogin.invalid) {

      this.formLogin.markAllAsTouched()
      this.formInvalido = true
      return false
    }

    return true
  }
}
