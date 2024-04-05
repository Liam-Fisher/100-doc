import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCounterComponent } from './day-counter.component';

describe('DayCounterComponent', () => {
  let component: DayCounterComponent;
  let fixture: ComponentFixture<DayCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
