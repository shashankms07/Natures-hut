import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandooriDryItemsComponent } from './tandoori-dry-items.component';

describe('TandooriDryItemsComponent', () => {
  let component: TandooriDryItemsComponent;
  let fixture: ComponentFixture<TandooriDryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TandooriDryItemsComponent]
    });
    fixture = TestBed.createComponent(TandooriDryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
