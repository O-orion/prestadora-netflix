import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../models/Usuario-interface';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  URL:string = 'http://localhost:7200/register';

  constructor(private http: HttpClient) { }


  public registrarUsuario(usuario: IUsuario) {
    return this.http.post<any>(`${this.URL}`, usuario)
  }
}
