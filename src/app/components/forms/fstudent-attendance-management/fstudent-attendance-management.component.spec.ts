import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FstudentAttendanceManagementComponent } from './fstudent-attendance-management.component';

describe('FstudentAttendanceManagementComponent', () => {
  let component: FstudentAttendanceManagementComponent;
  let fixture: ComponentFixture<FstudentAttendanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FstudentAttendanceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FstudentAttendanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
