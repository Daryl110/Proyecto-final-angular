import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { JQuery as $ } from './../../typings';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from 'src/app/modulos/angular-material/angular-material.module';

import { PersonaService } from 'src/app/_services/persona.service';
import { UsuarioService } from 'src/app/_services/usuario.service';

import { PersonasComponent } from './componentes/personas/personas.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
