import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssuntoComponent } from './show-assunto.component';

describe('ShowAssuntoComponent', () => {
  let component: ShowAssuntoComponent;
  let fixture: ComponentFixture<ShowAssuntoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAssuntoComponent]
    });
    fixture = TestBed.createComponent(ShowAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
