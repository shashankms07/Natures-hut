import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishItemsComponent } from './fish-items.component';

describe('FishItemsComponent', () => {
  let component: FishItemsComponent;
  let fixture: ComponentFixture<FishItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishItemsComponent]
    });
    fixture = TestBed.createComponent(FishItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
