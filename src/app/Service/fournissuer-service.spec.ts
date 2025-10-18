import { TestBed } from '@angular/core/testing';

import { FournissuerService } from './fournissuer-service';

describe('FournissuerService', () => {
  let service: FournissuerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournissuerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
