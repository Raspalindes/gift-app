import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListItemComponent } from './gift-list-item.component';

describe('GiftListItemComponent', () => {
  let component: GiftListItemComponent;
  let fixture: ComponentFixture<GiftListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
