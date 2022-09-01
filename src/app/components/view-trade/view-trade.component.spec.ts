import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTradeComponent } from './view-trade.component';

describe('ViewTradeComponent', () => {
  let component: ViewTradeComponent;
  let fixture: ComponentFixture<ViewTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
