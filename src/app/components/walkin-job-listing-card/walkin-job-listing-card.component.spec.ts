import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinJobListingCardComponent } from './walkin-job-listing-card.component';

describe('WalkinJobListingCardComponent', () => {
  let component: WalkinJobListingCardComponent;
  let fixture: ComponentFixture<WalkinJobListingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinJobListingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinJobListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
