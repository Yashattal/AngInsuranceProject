import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustnameComponent } from './custname.component';

describe('CustnameComponent', () => {
  let component: CustnameComponent;
  let fixture: ComponentFixture<CustnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustnameComponent]
    });
    fixture = TestBed.createComponent(CustnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
