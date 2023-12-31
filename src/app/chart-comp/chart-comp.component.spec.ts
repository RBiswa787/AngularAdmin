import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCompComponent } from './chart-comp.component';

describe('ChartCompComponent', () => {
  let component: ChartCompComponent;
  let fixture: ComponentFixture<ChartCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartCompComponent]
    });
    fixture = TestBed.createComponent(ChartCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
