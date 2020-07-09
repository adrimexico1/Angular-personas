import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCRUD';

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"])
  }
  Agregar(){
    this.router.navigate(["agregar"])
  }
  Editar(){
    this.router.navigate(["editar"])
  }
  Eliminar(){
    this.router.navigate(["eliminar"])
  }
}
