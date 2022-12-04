import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWelcomeComponent } from './welcome.component';

describe('HomeWelcomeComponent', () => {
  let component: HomeWelcomeComponent;
  let fixture: ComponentFixture<HomeWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
