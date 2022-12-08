import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileEducationComponent } from './edit-profile-education.component';

describe('EditProfileEducationComponent', () => {
  let component: EditProfileEducationComponent;
  let fixture: ComponentFixture<EditProfileEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileEducationComponent ]
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
