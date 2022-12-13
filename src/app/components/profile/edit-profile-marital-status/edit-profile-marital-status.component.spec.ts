import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defer, Observable } from 'rxjs';
import { IProfileMaritalStatus } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

import { EditProfileMaritalStatusComponent } from './edit-profile-marital-status.component';

describe('EditProfileMaritalStatusComponent', () => {
  let component: EditProfileMaritalStatusComponent;
  let fixture: ComponentFixture<EditProfileMaritalStatusComponent>;
  let profileServiceStub: Partial<ProfileService>;

  profileServiceStub = {
    getProfileMaritalStatus() : Observable<IProfileMaritalStatus> {
      let maritalStatus : IProfileMaritalStatus = {
        maritalStatus: ''
      }

      return defer(() => Promise.resolve(maritalStatus));
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatFormFieldModule, MatSelectModule, BrowserAnimationsModule, ReactiveFormsModule ],
      declarations: [ EditProfileMaritalStatusComponent ],
      providers: [
        { provide: ProfileService, useValue: profileServiceStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
