import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerCoreComponent } from './tracker-core.component';

describe('TrackerCoreComponent', () => {
  let component: TrackerCoreComponent;
  let fixture: ComponentFixture<TrackerCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
