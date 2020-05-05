import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertSingleComponent } from './advert-single.component';

describe('AdvertSingleComponent', () => {
  let component: AdvertSingleComponent;
  let fixture: ComponentFixture<AdvertSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
