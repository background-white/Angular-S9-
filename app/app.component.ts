import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculando';
  numero1!:number;
  numero2!:number;
  resultado!:number;
  seleccionar: string = '(No eligio operacion)';
}
