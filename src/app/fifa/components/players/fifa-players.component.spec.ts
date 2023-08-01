import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaPlayersComponent } from './fifa-players.component';

describe('FifaPlayersComponent', () => {
  let component: FifaPlayersComponent;
  let fixture: ComponentFixture<FifaPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifaPlayersComponent]
    });
    fixture = TestBed.createComponent(FifaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
