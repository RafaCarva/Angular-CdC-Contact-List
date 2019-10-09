import { TestBed } from '@angular/core/testing';

import { ContatoModelService } from './contato-model.service';

describe('ContatoModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoModelService = TestBed.get(ContatoModelService);
    expect(service).toBeTruthy();
  });
});
