import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithTitleComponent } from './card-with-title.component';

describe('CardWithTitleComponent', () => {
  let component: CardWithTitleComponent;
  let fixture: ComponentFixture<CardWithTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
