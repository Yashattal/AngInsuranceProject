import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpolComponent } from './addpol.component';

describe('AddpolComponent', () => {
  let component: AddpolComponent;
  let fixture: ComponentFixture<AddpolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpolComponent]
    });
    fixture = TestBed.createComponent(AddpolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
