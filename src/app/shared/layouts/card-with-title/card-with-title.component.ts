import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-with-title',
  templateUrl: './card-with-title.component.html',
  styleUrls: ['./card-with-title.component.scss']
})
export class CardWithTitleComponent {
  @Input() public title: string;
  @Input() public description: string;
}
