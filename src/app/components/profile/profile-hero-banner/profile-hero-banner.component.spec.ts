import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { IProfileHeroBanner } from 'src/app/models/ProfileHeroBanner';
import { ImageService } from 'src/app/services/image.service';


import { ProfileHeroBannerComponent } from './profile-hero-banner.component';

describe('ProfileHeroBannerComponent', () => {
  let component: ProfileHeroBannerComponent;
  let fixture: ComponentFixture<ProfileHeroBannerComponent>;
  let dialogStub: Partial<MatDialog>;
  let imageStub: Partial<ImageService>;
  let expectedHBI: IProfileHeroBanner =  {
    avatarImageUrl: "",
    backgroundImageUrl: "",
    firstName: "",
    lastName: "",
    currentCity: "",
    currentCountry: ""
  };

  dialogStub = {

  }

  imageStub = {

  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHeroBannerComponent ],
      providers: [
        {provide: MatDialog, useValue: dialogStub}, 
        {provide: ImageService, useValue: imageStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeroBannerComponent);
    component = fixture.componentInstance;
    component.heroBannerInformation = expectedHBI;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
