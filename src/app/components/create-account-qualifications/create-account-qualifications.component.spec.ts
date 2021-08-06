import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountQualificationsComponent } from './create-account-qualifications.component';

describe('CreateAccountQualificationsComponent', () => {
  let component: CreateAccountQualificationsComponent;
  let fixture: ComponentFixture<CreateAccountQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountQualificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
