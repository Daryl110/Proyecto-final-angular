// tslint:disable-next-line:quotemark
import { Persona } from "./persona";

export interface Usuario {
    id: string,
    nombreUsuario: string,
    contrasena: string,
    // tslint:disable-next-line:semicolon
    personaId: Persona
}
