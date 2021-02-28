import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTilesComponent } from './users-tiles.component';

describe('UsersTilesComponent', () => {
  let component: UsersTilesComponent;
  let fixture: ComponentFixture<UsersTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
