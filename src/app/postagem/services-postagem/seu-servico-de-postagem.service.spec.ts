import { TestBed } from '@angular/core/testing';

import { SeuServicoDePostagem } from './seu-servico-de-postagem.service';

describe('SeuServicoDePostagemService', () => {
  let service: SeuServicoDePostagem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeuServicoDePostagem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
