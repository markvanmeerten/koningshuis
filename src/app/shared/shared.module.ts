import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultBackgroundComponent } from './layouts/default-background/default-background.component';
import { CardWithTitleComponent } from './layouts/card-with-title/card-with-title.component';

@NgModule({
  declarations: [
    DefaultBackgroundComponent,
    CardWithTitleComponent
  ],
  exports: [
    CardWithTitleComponent
  ],
  imports: [
    RouterModule
  ]
})
export class SharedModule {
}
