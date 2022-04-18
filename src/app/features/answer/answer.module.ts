import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultipleChoiceAnswerComponent } from './components/multiple-choice-answer/multiple-choice-answer.component';
import { OpenAnswerComponent } from './components/open-answer/open-answer.component';

@NgModule({
  declarations: [
    MultipleChoiceAnswerComponent,
    OpenAnswerComponent
  ],
  exports: [
    MultipleChoiceAnswerComponent,
    OpenAnswerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextareaModule
  ]
})
export class AnswerModule {
}
