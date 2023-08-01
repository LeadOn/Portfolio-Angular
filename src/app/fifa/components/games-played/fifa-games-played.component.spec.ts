import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaGamesPlayedComponent } from './fifa-games-played.component';

describe('FifaGamesPlayedComponent', () => {
  let component: FifaGamesPlayedComponent;
  let fixture: ComponentFixture<FifaGamesPlayedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifaGamesPlayedComponent],
    });
    fixture = TestBed.createComponent(FifaGamesPlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
