import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCompComponent } from './small-comp.component';

describe('SmallCompComponent', () => {
  let component: SmallCompComponent;
  let fixture: ComponentFixture<SmallCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallCompComponent]
    });
    fixture = TestBed.createComponent(SmallCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
