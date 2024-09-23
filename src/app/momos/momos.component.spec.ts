import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomosComponent } from './momos.component';

describe('MomosComponent', () => {
  let component: MomosComponent;
  let fixture: ComponentFixture<MomosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MomosComponent]
    });
    fixture = TestBed.createComponent(MomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
