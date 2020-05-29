import { TestBed } from '@angular/core/testing';

import { BestGameService } from './best-game.service';

describe('BestGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestGameService = TestBed.get(BestGameService);
    expect(service).toBeTruthy();
  });
});
