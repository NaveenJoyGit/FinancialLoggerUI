import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLogInputComponent } from './fin-log-input.component';

describe('FinLogInputComponent', () => {
  let component: FinLogInputComponent;
  let fixture: ComponentFixture<FinLogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLogInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinLogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
