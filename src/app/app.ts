
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { DataServicio } from './data-servicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  constructor(private dataService: DataServicio) { }
  ngOnInit() {
    console.log("Hola")
    //  this.probar()
  }
  probar() {


    this.dataService.getData().subscribe(datos => {
      console.log("El request " + datos.cuerpo)
    })

  }

  
}
