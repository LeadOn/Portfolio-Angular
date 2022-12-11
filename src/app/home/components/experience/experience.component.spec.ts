import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExperienceComponent } from './experience.component';

describe('HomeExperienceComponent', () => {
  let component: HomeExperienceComponent;
  let fixture: ComponentFixture<HomeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
