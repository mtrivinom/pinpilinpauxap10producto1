import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegableComponent } from './navegable.component';

describe('NavegableComponent', () => {
  let component: NavegableComponent;
  let fixture: ComponentFixture<NavegableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
