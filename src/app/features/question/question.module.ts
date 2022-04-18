import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { AnswerModule } from '@features/answer/answer.module';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    QuestionComponent,
  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    AnswerModule,
    CoreModule,
    FormsModule
  ]
})
export class QuestionModule {
}
