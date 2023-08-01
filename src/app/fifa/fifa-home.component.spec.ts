import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaHomeComponent } from './fifa-home.component';

describe('FifaHomeComponent', () => {
  let component: FifaHomeComponent;
  let fixture: ComponentFixture<FifaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifaHomeComponent]
    });
    fixture = TestBed.createComponent(FifaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
