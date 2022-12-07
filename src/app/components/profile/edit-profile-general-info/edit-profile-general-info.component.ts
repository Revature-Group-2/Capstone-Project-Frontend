import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IGeneralInformation } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile-general-info',
  templateUrl: './edit-profile-general-info.component.html',
  styleUrls: ['./edit-profile-general-info.component.css']
})
export class EditProfileGeneralInfoComponent implements OnDestroy {

  constructor(private profileService: ProfileService) {}

  form = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    gender: new FormControl<string>(''),
    dob: new FormControl<string>(''),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    phoneNumber: new FormControl<string>('', Validators.minLength(10))
  });

  submit() {
    if (this.form.valid) {
      const generalInformation: IGeneralInformation = {
        firstName: this.form.value.firstName ? this.form.value.firstName : '',
        lastName: this.form.value.lastName ? this.form.value.lastName : '',
        gender: this.form.value.gender ? this.form.value.gender : '',
        dob: this.form.value.dob ? this.form.value.dob : '',
        email: this.form.value.email!,
        phoneNumber: this.form.value.phoneNumber ? this.form.value.phoneNumber : ''
      }

      this.profileService.updateGeneralInformation(generalInformation).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        }
      })
    }
  }

  ngOnDestroy(): void {
   
  }
}
