import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/_interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // tslint:disable-next-line:no-inferrable-types
  private _url: string = 'http://localhost:8080/Usuario';
  private usuario: Usuario;

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(this._url);
  }

  public eliminar(id: string) {
    return this.http.delete(this._url + '/' + id);
  }

  public crear(usuario: Usuario) {
    return this.http.post(this._url, usuario);
  }

  public modificar(usuario: Usuario) {
    return this.http.put(this._url + `/${usuario._id}`, usuario);
  }
}
