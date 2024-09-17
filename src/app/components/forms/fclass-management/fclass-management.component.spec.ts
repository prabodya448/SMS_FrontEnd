import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FclassManagementComponent } from './fclass-management.component';

describe('FclassManagementComponent', () => {
  let component: FclassManagementComponent;
  let fixture: ComponentFixture<FclassManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FclassManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FclassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
