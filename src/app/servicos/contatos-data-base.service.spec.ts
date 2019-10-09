import { TestBed } from '@angular/core/testing';

import { ContatosDataBaseService } from './contatos-data-base.service';

describe('ContatosDataBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatosDataBaseService = TestBed.get(ContatosDataBaseService);
    expect(service).toBeTruthy();
  });
});
