import { TestBed } from '@angular/core/testing';

import { PopularGameService } from './popular-game.service';

describe('PopularGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopularGameService = TestBed.get(PopularGameService);
    expect(service).toBeTruthy();
  });
});
