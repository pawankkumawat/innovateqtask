import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContenentHeaderComponent } from './main-contenent-header.component';

describe('MainContenentHeaderComponent', () => {
  let component: MainContenentHeaderComponent;
  let fixture: ComponentFixture<MainContenentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContenentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContenentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
