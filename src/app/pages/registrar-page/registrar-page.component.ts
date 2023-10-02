import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MensagemStatus, Status } from 'src/app/enums/Status';
import { IUsuario } from 'src/app/models/Usuario-interface';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registrar-page',
  templateUrl: './registrar-page.component.html',
  styleUrls: ['./registrar-page.component.scss']
})
export class RegistrarPageComponent {
  hide: boolean = true;

  exibirMensagem: boolean = false;
  mensagemStatus: MensagemStatus = MensagemStatus.SUCESSO;
  statusCadastros: Status = Status.SUCESSO

  formRegister!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private serviceUsuario: RegisterService) {}

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public registrarUsuario(): void {
    if(this.formularioValido()) {

      const { nome, email, senha } = this.formRegister.getRawValue();

      const usuario: IUsuario = {
        'Nome': nome,
        'Email': email,
        'Senha': senha,
        'Sexo': 'M',
        'DataNasc': "2000-04-02"
      }

      this.serviceUsuario.registrarUsuario(usuario).subscribe({
        next: (dados) => {
          console.log(dados)
          this.exibirMensagem = true;
          this.mensagemStatus = MensagemStatus.SUCESSO;
          this.statusCadastros = Status.SUCESSO;
        },
        error: (err) => {
          console.log(err)
          this.exibirMensagem = true;
          this.mensagemStatus = MensagemStatus.FALHA;
          this.statusCadastros = Status.FALHA;
        }
      })
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
