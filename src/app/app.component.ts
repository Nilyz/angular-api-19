import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  posts:any[]=[];


  
  constructor(private servicio:DataService){}

  ngOnInit(){
    this.servicio.getPost().subscribe((data:any[])=>{
      this.posts=data;
      console.log(this.posts);
    });
  }
}
