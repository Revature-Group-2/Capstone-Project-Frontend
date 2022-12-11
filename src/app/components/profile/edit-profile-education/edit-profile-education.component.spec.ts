import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { IProfileEducation } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

import { EditProfileEducationComponent } from './edit-profile-education.component';

describe('EditProfileEducationComponent', () => {
  let component: EditProfileEducationComponent;
  let fixture: ComponentFixture<EditProfileEducationComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = { 
    getProfileEducation(): Observable<IProfileEducation> {
      let profileEducation: IProfileEducation = {
        schoolName: ''
      }

      return defer(() => Promise.resolve(profileEducation));
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileEducationComponent ],
      providers: [
        {provide: ProfileService, useValue: profileServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
