import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLogLoginComponent } from './fin-log-login.component';

describe('FinLogLoginComponent', () => {
  let component: FinLogLoginComponent;
  let fixture: ComponentFixture<FinLogLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLogLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinLogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
