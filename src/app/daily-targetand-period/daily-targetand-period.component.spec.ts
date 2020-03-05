import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTargetandPeriodComponent } from './daily-targetand-period.component';

describe('DailyTargetandPeriodComponent', () => {
  let component: DailyTargetandPeriodComponent;
  let fixture: ComponentFixture<DailyTargetandPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTargetandPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTargetandPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
