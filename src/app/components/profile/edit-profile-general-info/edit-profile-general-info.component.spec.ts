import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { IGeneralInformation, IProfile, IProfileWork } from 'src/app/models/Profile';

import { EditProfileGeneralInfoComponent } from './edit-profile-general-info.component';

describe('EditProfileGeneralInfoComponent', () => {
  let component: EditProfileGeneralInfoComponent;
  let fixture: ComponentFixture<EditProfileGeneralInfoComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = {
    getGeneralInformation(): Observable<IGeneralInformation> {
      let generalInformation: IGeneralInformation = {
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        phoneNumber: ''
      }

      return defer(() => Promise.resolve(generalInformation));
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileGeneralInfoComponent ],
      providers: [
        {provide: ProfileService, useValue: profileServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
