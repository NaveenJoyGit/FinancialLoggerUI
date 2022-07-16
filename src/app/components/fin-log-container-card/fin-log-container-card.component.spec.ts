import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLogContainerCardComponent } from './fin-log-container-card.component';

describe('FinLogContainerCardComponent', () => {
  let component: FinLogContainerCardComponent;
  let fixture: ComponentFixture<FinLogContainerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLogContainerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinLogContainerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
