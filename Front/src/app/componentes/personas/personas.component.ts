import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/_services/persona.service';
import { Persona } from 'src/app/_interfaces/persona';
import { Usuario } from 'src/app/_interfaces/usuario';
import { UsuarioService } from 'src/app/_services/usuario.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  private _personas: Persona[] = [];
  private _usuarios: Usuario[] = [];
  private _crearForm: boolean;
  private _persona: any = {};
  private _bool: boolean;

  constructor(private servicioPersona: PersonaService, private servicioUsuario: UsuarioService) { this._crearForm = false; }

  ngOnInit() {
    this.listar();
    this.listarUsuarios();
  }

  public get usuarios(): Usuario[] {
    return this._usuarios;
  }

  public set usuarios(value: Usuario[]) {
    this._usuarios = value;
  }

  public get persona(): any {
    return this._persona;
  }

  public set persona(value: any) {
    this._persona = value;
  }

  public get personas(): Persona[] {
    return this._personas;
  }

  public set personas(value: Persona[]) {
    this._personas = value;
  }

  public verOcultarFormulario(): void {
    this._crearForm = !this._crearForm;
  }

  public get visible(): boolean {
    return this._crearForm;
  }

  public set visible(value: boolean) {
    this._crearForm = value;
  }

  public listar(): void {
    this.servicioPersona.listar().
      subscribe((personas: Persona[]) => {
        this._personas = personas;
      });
  }

  public eliminar(id: string) {
    this.servicioPersona.eliminar(id).
      subscribe((res) => {
        this.listar();
      });
  }

  public mandarFrmId(persona) {
    if (!this._crearForm) {
      this.persona._id = persona._id;
      this.persona.nombre = persona.nombre;
      this.persona.apellido = persona.apellido;
      this.persona.edad = persona.edad;
    } else {
      this.persona = {};
    }
    this._crearForm = !this._crearForm;
  }

  public accionar(persona) {
    console.log();
    if (this.persona._id !== '' && this.persona._id !== undefined) {
      this.modificar(persona, this.persona._id);
    } else {
      this.crear(persona);
    }
    this.persona = {};
  }

  private modificar(persona, id) {
    persona._id = id;
    this.servicioPersona.modificar(persona).
      // tslint:disable-next-line:no-shadowed-variable
      subscribe((persona) => {
        console.log('Modificado');
        console.log(persona);
        this.listar();
        this._crearForm = false;
      });
  }

  private crear(persona) {
    this.servicioPersona.crear(persona)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(persona => {
        console.log('Creado');
        console.log(persona);
        this.listar();
        this._crearForm = false;
      });
  }

  public listarUsuariosPersona(id: string) {
    return this._usuarios.filter((usuario) => {
      // tslint:disable-next-line:curly
      if (usuario.personaId === id) return usuario;
    });
  }

  public listarUsuarios() {
    this.servicioUsuario.listar().
      subscribe((usuarios: Usuario[]) => {
        this._usuarios = usuarios;
      });
  }

  public crearUsuario(usuario) {
    console.log(usuario);
  }
}
