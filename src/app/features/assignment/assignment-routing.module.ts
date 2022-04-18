import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '@core/enums/app-routes.enum';
import { DefaultBackgroundComponent } from '@shared/layouts/default-background/default-background.component';
import { AssignmentComponent } from './containers/assignment/assignment.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AssignmentResolver } from './resolvers/assignment.resolver';
import { DomainResolver } from './resolvers/domain.resolver';

const routes: Routes = [
  {
    path: '',
    component: DefaultBackgroundComponent,
    children: [
      {
        path: AppRoutes.Overview,
        component: OverviewComponent,
        resolve: { domain: DomainResolver}
      },
      {
        path: ':id',
        component: AssignmentComponent,
        resolve: { assignment: AssignmentResolver },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule {
}
