import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeventManagementComponent } from './fevent-management.component';

describe('FeventManagementComponent', () => {
  let component: FeventManagementComponent;
  let fixture: ComponentFixture<FeventManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeventManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeventManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
