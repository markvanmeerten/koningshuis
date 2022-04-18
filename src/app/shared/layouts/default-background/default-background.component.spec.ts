import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBackgroundComponent } from './default-background.component';

describe('DefaultBackgroundComponent', () => {
  let component: DefaultBackgroundComponent;
  let fixture: ComponentFixture<DefaultBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
