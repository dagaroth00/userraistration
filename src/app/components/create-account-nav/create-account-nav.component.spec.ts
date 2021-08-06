import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountNavComponent } from './create-account-nav.component';

describe('CreateAccountNavComponent', () => {
  let component: CreateAccountNavComponent;
  let fixture: ComponentFixture<CreateAccountNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
