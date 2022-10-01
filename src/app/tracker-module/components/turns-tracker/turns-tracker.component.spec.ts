import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnsTrackerComponent } from './turns-tracker.component';

describe('TurnsTrackerComponent', () => {
  let component: TurnsTrackerComponent;
  let fixture: ComponentFixture<TurnsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnsTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
