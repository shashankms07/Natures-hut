import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceItemsComponent } from './rice-items.component';

describe('RiceItemsComponent', () => {
  let component: RiceItemsComponent;
  let fixture: ComponentFixture<RiceItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiceItemsComponent]
    });
    fixture = TestBed.createComponent(RiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
