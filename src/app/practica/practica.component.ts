import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],//No importar HttpClient porque esta en appconfig.ts
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

   datos:any[] = [];//guardar los datos que se obtengan del servicio

  constructor(private servicio:ServiciopracticaService){}//inyectar la dependencia de ServiciopracticaService

  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos) => {
        this.datos = datos;//renderiza y pinta en el template html
      }
    );
  }
}
