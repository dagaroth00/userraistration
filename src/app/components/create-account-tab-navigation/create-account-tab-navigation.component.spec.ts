import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountTabNavigationComponent } from './create-account-tab-navigation.component';

describe('CreateAccountTabNavigationComponent', () => {
  let component: CreateAccountTabNavigationComponent;
  let fixture: ComponentFixture<CreateAccountTabNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountTabNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountTabNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
