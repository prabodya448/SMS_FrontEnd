import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FclassFeesManagementComponent } from './fclass-fees-management.component';

describe('FclassFeesManagementComponent', () => {
  let component: FclassFeesManagementComponent;
  let fixture: ComponentFixture<FclassFeesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FclassFeesManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FclassFeesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
