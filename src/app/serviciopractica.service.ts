import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciopracticaService {

  private endpoint:string = 'http://localhost:8080/api/practica';  //endpoint de Spring Boot
  private endpoint2:string = 'https://fakestoreapi.com/products';  
  private endpoint3:string = 'http://localhost:8080/api/practica';

  constructor(private http:HttpClient) { }//inyectar la dependencia de HttpClient

  public getDatos(){
    return this.http.get<any[]>(this.endpoint2);
  }
  
}
