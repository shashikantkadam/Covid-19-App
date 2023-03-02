import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseViewComponent } from './state-wise-view.component';

describe('StateWiseViewComponent', () => {
  let component: StateWiseViewComponent;
  let fixture: ComponentFixture<StateWiseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateWiseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateWiseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
