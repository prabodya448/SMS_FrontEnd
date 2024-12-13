import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtutorComponent } from './ltutor.component';

describe('LtutorComponent', () => {
  let component: LtutorComponent;
  let fixture: ComponentFixture<LtutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LtutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
