import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentComponent } from './show-coment.component';

describe('ShowComentComponent', () => {
  let component: ShowComentComponent;
  let fixture: ComponentFixture<ShowComentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowComentComponent]
    });
    fixture = TestBed.createComponent(ShowComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
