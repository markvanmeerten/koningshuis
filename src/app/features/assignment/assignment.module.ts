import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AnswerModule } from '../answer/answer.module';
import { QuestionModule } from '../question/question.module';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { ContentComponent } from './components/content/content.component';
import { AssignmentComponent } from './containers/assignment/assignment.component';
import { OverviewComponent } from './containers/overview/overview.component';

@NgModule({
  declarations: [
    AssignmentComponent,
    ContentComponent,
    OverviewComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    AnswerModule,
    SidebarModule,
    QuestionModule,
    ButtonModule,
    CoreModule,
    SharedModule
  ]
})
export class AssignmentModule {
}
