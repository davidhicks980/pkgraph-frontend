import { TestBed } from '@angular/core/testing';

import { FormSchemeService } from './form-scheme.service';

describe('FormSchemeService', () => {
  let service: FormSchemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSchemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
