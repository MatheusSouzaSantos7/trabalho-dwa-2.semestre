import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostagemComponent } from './show-postagem.component';

describe('ShowPostagemComponent', () => {
  let component: ShowPostagemComponent;
  let fixture: ComponentFixture<ShowPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPostagemComponent]
    });
    fixture = TestBed.createComponent(ShowPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
