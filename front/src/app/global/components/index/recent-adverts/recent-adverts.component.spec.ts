import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAdvertsComponent } from './recent-adverts.component';

describe('RecentAdvertsComponent', () => {
  let component: RecentAdvertsComponent;
  let fixture: ComponentFixture<RecentAdvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentAdvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
