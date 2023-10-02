import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide: boolean = true
  formLogin!: UntypedFormGroup;
  formInvalido: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder, private usuarioService: RegisterService) {}

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

      this.usuarioService.login({'Email': email, 'Senha': senha}).subscribe({
        next: (dados) => {
          console.log('certoo')
          console.log(dados)
        },
        error: (err) => {
          console.log('certou ou errado')
          console.log(err)
        }
      })
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
