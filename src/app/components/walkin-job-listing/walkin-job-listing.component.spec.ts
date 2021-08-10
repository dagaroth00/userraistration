import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinJobListingComponent } from './walkin-job-listing.component';

describe('WalkinJobListingComponent', () => {
  let component: WalkinJobListingComponent;
  let fixture: ComponentFixture<WalkinJobListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkinJobListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
