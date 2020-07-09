import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Persona/list/list.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { DeleteComponent } from './Persona/delete/delete.component';


const routes: Routes = [
  {path:'listar', component:ListComponent},
  {path:'agregar', component:AddComponent},
  {path:'editar', component:EditComponent},
  {path:'eliminar', component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
