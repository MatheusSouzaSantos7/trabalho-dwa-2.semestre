import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComentComponent } from './add-edit-coment.component';

describe('AddEditComentComponent', () => {
  let component: AddEditComentComponent;
  let fixture: ComponentFixture<AddEditComentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditComentComponent]
    });
    fixture = TestBed.createComponent(AddEditComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
