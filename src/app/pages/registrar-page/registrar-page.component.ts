import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/models/Usuario-interface';

@Component({
  selector: 'app-registrar-page',
  templateUrl: './registrar-page.component.html',
  styleUrls: ['./registrar-page.component.scss']
})
export class RegistrarPageComponent {
  hide: boolean = true;
  formRegister!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public registrarUsuario(): void {
    if(this.formularioValido()) {
      const { nome, email, senha } = this.formRegister.getRawValue() as IUsuario;
      alert(nome + ' ' + email + ' ' + senha)
    }
  }

  private formularioValido(): boolean {

    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return false;
    }
    return true;
  }

}
