import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/Usuario-interface';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private URL:string = 'http://localhost:7200';

  constructor(private http: HttpClient) { }


  public registrarUsuario(usuario: IUsuario) {
    return this.http.post<any>(`${this.URL}/register`, usuario)
  }

  public login(usuarioLogin:any) {
    return this.http.post<any>(`${this.URL}/login`, usuarioLogin)
  }
}
