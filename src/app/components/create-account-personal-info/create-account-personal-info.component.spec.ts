import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountPersonalInfoComponent } from './create-account-personal-info.component';

describe('CreateAccountPersonalInfoComponent', () => {
  let component: CreateAccountPersonalInfoComponent;
  let fixture: ComponentFixture<CreateAccountPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
