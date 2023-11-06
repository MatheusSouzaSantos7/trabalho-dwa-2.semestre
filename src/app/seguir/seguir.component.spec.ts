import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguirComponent } from './seguir.component';

describe('SeguirComponent', () => {
  let component: SeguirComponent;
  let fixture: ComponentFixture<SeguirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguirComponent]
    });
    fixture = TestBed.createComponent(SeguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
