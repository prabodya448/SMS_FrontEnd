import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclassComponent } from './lclass.component';

describe('LclassComponent', () => {
  let component: LclassComponent;
  let fixture: ComponentFixture<LclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LclassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
