import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalViewComponent } from './national-view.component';

describe('NationalViewComponent', () => {
  let component: NationalViewComponent;
  let fixture: ComponentFixture<NationalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
