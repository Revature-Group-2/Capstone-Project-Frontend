import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileLocationComponent } from './edit-profile-location.component';

describe('EditProfileLocationComponent', () => {
  let component: EditProfileLocationComponent;
  let fixture: ComponentFixture<EditProfileLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
