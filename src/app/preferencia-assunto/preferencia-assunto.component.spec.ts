import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciaAssuntoComponent } from './preferencia-assunto.component';

describe('PreferenciaAssuntoComponent', () => {
  let component: PreferenciaAssuntoComponent;
  let fixture: ComponentFixture<PreferenciaAssuntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferenciaAssuntoComponent]
    });
    fixture = TestBed.createComponent(PreferenciaAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
