import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileWorkComponent } from './edit-profile-work.component';

describe('EditProfileWorkComponent', () => {
  let component: EditProfileWorkComponent;
  let fixture: ComponentFixture<EditProfileWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileWorkComponent ]
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
