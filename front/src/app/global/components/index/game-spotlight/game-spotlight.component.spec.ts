import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpotlightComponent } from './game-spotlight.component';

describe('GameSpotlightComponent', () => {
  let component: GameSpotlightComponent;
  let fixture: ComponentFixture<GameSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
