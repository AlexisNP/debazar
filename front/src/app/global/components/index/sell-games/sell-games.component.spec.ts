import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellGamesComponent } from './sell-games.component';

describe('SellGamesComponent', () => {
  let component: SellGamesComponent;
  let fixture: ComponentFixture<SellGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
