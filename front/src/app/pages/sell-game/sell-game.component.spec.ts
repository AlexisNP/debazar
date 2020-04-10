import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellGameComponent } from './sell-game.component';

describe('SellGameComponent', () => {
  let component: SellGameComponent;
  let fixture: ComponentFixture<SellGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
