import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileService } from 'src/app/services/profile.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

import { FollowingsPageComponent } from './followings-page.component';

@Component({
  selector: 'app-navbar',
  template: ''
})
class MockNavbar{}

describe('FollowingsPageComponent', () => {
  let component: FollowingsPageComponent;
  let fixture: ComponentFixture<FollowingsPageComponent>;
  let profileServiceStub: Partial<ProfileService>;
  let subscriptionServiceStub: Partial<SubscriptionService>;

  profileServiceStub = {}

  subscriptionServiceStub = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ FollowingsPageComponent, MockNavbar ],
      providers: [ { provide: ProfileService, useValue: profileServiceStub },
        { provide: SubscriptionService, useValue: subscriptionServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
