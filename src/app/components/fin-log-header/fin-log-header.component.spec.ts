import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinLogHeaderComponent } from './fin-log-header.component';

describe('FinLogHeaderComponent', () => {
  let component: FinLogHeaderComponent;
  let fixture: ComponentFixture<FinLogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinLogHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinLogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
