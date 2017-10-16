import { TestBed, inject } from '@angular/core/testing';

import { MainTopicService } from './main-topic.service';

describe('MainTopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainTopicService]
    });
  });

  it('should be created', inject([MainTopicService], (service: MainTopicService) => {
    expect(service).toBeTruthy();
  }));
});
