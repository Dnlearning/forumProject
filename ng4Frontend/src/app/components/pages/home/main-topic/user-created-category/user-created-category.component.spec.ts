import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedCategoryComponent } from './user-created-category.component';

describe('UserCreatedCategoryComponent', () => {
  let component: UserCreatedCategoryComponent;
  let fixture: ComponentFixture<UserCreatedCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatedCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
