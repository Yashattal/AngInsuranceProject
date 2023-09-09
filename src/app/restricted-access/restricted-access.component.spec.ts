import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedAccessComponent } from './restricted-access.component';

describe('RestrictedAccessComponent', () => {
  let component: RestrictedAccessComponent;
  let fixture: ComponentFixture<RestrictedAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictedAccessComponent]
    });
    fixture = TestBed.createComponent(RestrictedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
