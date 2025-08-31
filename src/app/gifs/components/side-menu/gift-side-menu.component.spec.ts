import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSideMenuComponent } from './gift-side-menu.component';

describe('GiftSideMenuComponent', () => {
  let component: GiftSideMenuComponent;
  let fixture: ComponentFixture<GiftSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
