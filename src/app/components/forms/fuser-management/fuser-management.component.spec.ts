import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuserManagementComponent } from './fuser-management.component';

describe('FuserManagementComponent', () => {
  let component: FuserManagementComponent;
  let fixture: ComponentFixture<FuserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuserManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
