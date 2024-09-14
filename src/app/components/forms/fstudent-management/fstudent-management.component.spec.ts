import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstudentManagementComponent } from './fstudent-management.component';

describe('FstudentManagementComponent', () => {
  let component: FstudentManagementComponent;
  let fixture: ComponentFixture<FstudentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FstudentManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FstudentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
