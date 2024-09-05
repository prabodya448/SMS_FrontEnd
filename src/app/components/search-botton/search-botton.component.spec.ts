import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBottonComponent } from './search-botton.component';

describe('SearchBottonComponent', () => {
  let component: SearchBottonComponent;
  let fixture: ComponentFixture<SearchBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBottonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
