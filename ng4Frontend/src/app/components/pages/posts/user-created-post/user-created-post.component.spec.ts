import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedPostComponent } from './user-created-post.component';

describe('UserCreatedPostComponent', () => {
  let component: UserCreatedPostComponent;
  let fixture: ComponentFixture<UserCreatedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
