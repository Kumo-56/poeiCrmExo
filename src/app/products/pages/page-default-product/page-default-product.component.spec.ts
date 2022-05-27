import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDefaultProductComponent } from './page-default-product.component';

describe('PageDefaultProductComponent', () => {
  let component: PageDefaultProductComponent;
  let fixture: ComponentFixture<PageDefaultProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDefaultProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDefaultProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
