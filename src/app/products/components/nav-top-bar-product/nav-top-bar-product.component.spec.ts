import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTopBarProductComponent } from './nav-top-bar-product.component';

describe('NavTopBarProductComponent', () => {
  let component: NavTopBarProductComponent;
  let fixture: ComponentFixture<NavTopBarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTopBarProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTopBarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
