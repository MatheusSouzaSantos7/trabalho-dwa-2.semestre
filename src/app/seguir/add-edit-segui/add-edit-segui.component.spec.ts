import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSeguiComponent } from './add-edit-segui.component';

describe('AddEditSeguiComponent', () => {
  let component: AddEditSeguiComponent;
  let fixture: ComponentFixture<AddEditSeguiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditSeguiComponent]
    });
    fixture = TestBed.createComponent(AddEditSeguiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
