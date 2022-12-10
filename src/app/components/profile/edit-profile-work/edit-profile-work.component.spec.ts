import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, defer } from 'rxjs';
import { IProfile, IProfileWork } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

import { EditProfileWorkComponent } from './edit-profile-work.component';

describe('EditProfileWorkComponent', () => {
  let component: EditProfileWorkComponent;
  let fixture: ComponentFixture<EditProfileWorkComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = {
    getProfileWork(): Observable<IProfile> {
      let profile: IProfile = {
        id: 0,
        backgroundImageUrl: '',
        currentCity: '',
        currentCountry: '',
        bornCity: '',
        bornCountry: '',
        dob: '',
        gender: '',
        maritalStatus: '',
        schoolName: '',
        jobTitle: '',
        companyName: '',
        companyUrl: '',
        phoneNumber: '',
        owner: {
          id: 0,
          email: '',
          firstName: '',
          lastName: '',
          avatarImageUrl: ''
        }
      }

      return defer(() => Promise.resolve(profile));
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileWorkComponent ],
      providers: [
        {provide: ProfileService, useValue: profileServiceStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
