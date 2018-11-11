import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public static inicioVisible;

  constructor () {
    AppComponent.inicioVisible = true;
  }

  public get visible(): boolean {
    return AppComponent.inicioVisible;
  }

  public set visible(value: boolean) {
    AppComponent.inicioVisible = value;
  }

  private ocultar(): void {
    AppComponent.inicioVisible = !AppComponent.inicioVisible;
  }
}
