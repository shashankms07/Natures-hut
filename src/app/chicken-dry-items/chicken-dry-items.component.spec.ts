import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenDryItemsComponent } from './chicken-dry-items.component';

describe('ChickenDryItemsComponent', () => {
  let component: ChickenDryItemsComponent;
  let fixture: ComponentFixture<ChickenDryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickenDryItemsComponent]
    });
    fixture = TestBed.createComponent(ChickenDryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
