import { TestBed } from '@angular/core/testing';

import { RepoCheckerService } from './repo-checker.service';

describe('RepoCheckerService', () => {
  let service: RepoCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
