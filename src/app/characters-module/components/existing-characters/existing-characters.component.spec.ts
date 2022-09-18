import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingCharactersComponent } from './existing-characters.component';

describe('ExistingCharactersComponent', () => {
  let component: ExistingCharactersComponent;
  let fixture: ComponentFixture<ExistingCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
