import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolidComponent } from './polid.component';

describe('PolidComponent', () => {
  let component: PolidComponent;
  let fixture: ComponentFixture<PolidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolidComponent]
    });
    fixture = TestBed.createComponent(PolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
