import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaPlayerDetailsComponent } from './fifa-player-details.component';

describe('FifaPlayerDetailsComponent', () => {
  let component: FifaPlayerDetailsComponent;
  let fixture: ComponentFixture<FifaPlayerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifaPlayerDetailsComponent]
    });
    fixture = TestBed.createComponent(FifaPlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
