import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectveComponent } from './directve.component';

describe('DirectveComponent', () => {
  let component: DirectveComponent;
  let fixture: ComponentFixture<DirectveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectveComponent]
    });
    fixture = TestBed.createComponent(DirectveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
