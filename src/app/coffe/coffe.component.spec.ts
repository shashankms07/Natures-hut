import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeComponent } from './coffe.component';

describe('CoffeComponent', () => {
  let component: CoffeComponent;
  let fixture: ComponentFixture<CoffeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeComponent]
    });
    fixture = TestBed.createComponent(CoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
