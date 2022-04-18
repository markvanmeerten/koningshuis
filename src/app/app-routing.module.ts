import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Entity } from '@core/enums/entity.enum';

const routes: Routes = [
  {
    path: Entity.Assignment,
    loadChildren: () => import('./features/assignment/assignment.module').then((m) => m.AssignmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
