import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilePersonalDataComponent } from './edit-profile-personal-data.component';

describe('EditProfilePersonalDataComponent', () => {
  let component: EditProfilePersonalDataComponent;
  let fixture: ComponentFixture<EditProfilePersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfilePersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfilePersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
