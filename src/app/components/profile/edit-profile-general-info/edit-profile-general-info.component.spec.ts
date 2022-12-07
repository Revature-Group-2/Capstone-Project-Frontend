import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileGeneralInfoComponent } from './edit-profile-general-info.component';

describe('EditProfileGeneralInfoComponent', () => {
  let component: EditProfileGeneralInfoComponent;
  let fixture: ComponentFixture<EditProfileGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileGeneralInfoComponent ]
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
