import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LclassfeeComponent } from './lclassfee.component';

describe('LclassfeeComponent', () => {
  let component: LclassfeeComponent;
  let fixture: ComponentFixture<LclassfeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LclassfeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LclassfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
