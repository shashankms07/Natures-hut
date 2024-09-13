import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesComponent } from './shakes.component';

describe('ShakesComponent', () => {
  let component: ShakesComponent;
  let fixture: ComponentFixture<ShakesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShakesComponent]
    });
    fixture = TestBed.createComponent(ShakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
