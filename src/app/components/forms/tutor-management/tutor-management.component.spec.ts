import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorManagementComponent } from './tutor-management.component';

describe('TutorManagementComponent', () => {
  let component: TutorManagementComponent;
  let fixture: ComponentFixture<TutorManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
