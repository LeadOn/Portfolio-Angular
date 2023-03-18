import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEntryComponent } from './experience-entry.component';

describe('ExperienceEntryComponent', () => {
  let component: ExperienceEntryComponent;
  let fixture: ComponentFixture<ExperienceEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
