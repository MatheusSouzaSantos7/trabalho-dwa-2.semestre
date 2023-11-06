import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSeguiComponent } from './show-segui.component';

describe('ShowSeguiComponent', () => {
  let component: ShowSeguiComponent;
  let fixture: ComponentFixture<ShowSeguiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSeguiComponent]
    });
    fixture = TestBed.createComponent(ShowSeguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
