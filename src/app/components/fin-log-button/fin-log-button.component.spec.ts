import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLogButtonComponent } from './fin-log-button.component';

describe('FinLogButtonComponent', () => {
  let component: FinLogButtonComponent;
  let fixture: ComponentFixture<FinLogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLogButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinLogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
