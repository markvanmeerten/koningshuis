import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { IsOneOfPipe } from './pipes/is-one-of';
import { ToSubTypePipe } from './pipes/to-sub-type.pipe';

@NgModule({
  declarations: [
    ToSubTypePipe,
    IsOneOfPipe
  ],
  exports: [
    ToSubTypePipe,
    IsOneOfPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
})
export class CoreModule {
}
