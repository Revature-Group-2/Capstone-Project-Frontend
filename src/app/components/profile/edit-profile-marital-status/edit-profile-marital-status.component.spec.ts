import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileMaritalStatusComponent } from './edit-profile-marital-status.component';

describe('EditProfileMaritalStatusComponent', () => {
  let component: EditProfileMaritalStatusComponent;
  let fixture: ComponentFixture<EditProfileMaritalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileMaritalStatusComponent ]
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
