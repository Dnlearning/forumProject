import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectRoutersComponent } from './protect-routers.component';

describe('ProtectRoutersComponent', () => {
  let component: ProtectRoutersComponent;
  let fixture: ComponentFixture<ProtectRoutersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectRoutersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
