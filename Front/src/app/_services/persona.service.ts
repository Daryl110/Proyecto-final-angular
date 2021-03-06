import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/app/_interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  // tslint:disable-next-line:no-inferrable-types
  private _url: string = 'http://localhost:8080/Persona';
  private persona: Persona;

  constructor(private http: HttpClient) { }

  public listar() {
    return this.http.get(this._url);
  }

  public eliminar(id: string) {
    return this.http.delete(this._url + '/' + id);
  }

  public crear(persona: Persona) {
    return this.http.post(this._url, persona);
  }

  public modificar(persona: Persona) {
    return this.http.put(this._url + `/${persona._id}`, persona);
  }
}
