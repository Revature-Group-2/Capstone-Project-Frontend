import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { IGeneralInformation, IProfile, IProfileWork } from 'src/app/models/Profile';

import { EditProfileGeneralInfoComponent } from './edit-profile-general-info.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

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
      imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule, 
        MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule ],
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
