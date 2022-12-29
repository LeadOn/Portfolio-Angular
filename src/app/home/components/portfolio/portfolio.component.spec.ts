import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfolioComponent } from './portfolio.component';

describe('HomePortfolioComponent', () => {
  let component: HomePortfolioComponent;
  let fixture: ComponentFixture<HomePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
