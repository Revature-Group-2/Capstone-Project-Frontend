import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
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
  let profile = new Profile();
  //profile.owner.avatarImageUrl = ''
  let profiles = [profile];

  profileServiceStub = {
    getOwnProfile(){
      return of(profile);
    },
    getProfile(id: number){
      return of(profile);
    },
    getAllProfilesByIds(ids: number[]){
      return of(profiles);
    }
  }

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

/*   it('should call getAllProfilesByIds in IdProvided', () => {
    component.queryIdProvided(0);
    expect(component.profiles).toEqual(profiles);
  });

  it('should call getAllProfilesByIds in IdProvided', () => {
    component.queryIdNotProvided();
    expect(component.profiles).toEqual(profiles);
  }); */
});
