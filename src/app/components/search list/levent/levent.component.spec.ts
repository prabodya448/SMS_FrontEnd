import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeventComponent } from './levent.component';

describe('LeventComponent', () => {
  let component: LeventComponent;
  let fixture: ComponentFixture<LeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
