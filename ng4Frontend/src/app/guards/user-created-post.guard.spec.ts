import { TestBed, async, inject } from '@angular/core/testing';

import { UserCreatedPostGuard } from './user-created-post.guard';

describe('UserCreatedPostGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCreatedPostGuard]
    });
  });

  it('should ...', inject([UserCreatedPostGuard], (guard: UserCreatedPostGuard) => {
    expect(guard).toBeTruthy();
  }));
});
