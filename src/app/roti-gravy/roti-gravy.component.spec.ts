import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotiGravyComponent } from './roti-gravy.component';

describe('RotiGravyComponent', () => {
  let component: RotiGravyComponent;
  let fixture: ComponentFixture<RotiGravyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotiGravyComponent]
    });
    fixture = TestBed.createComponent(RotiGravyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
