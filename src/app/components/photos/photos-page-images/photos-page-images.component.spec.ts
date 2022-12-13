import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPageImagesComponent } from './photos-page-images.component';

describe('PhotosPageImagesComponent', () => {
  let component: PhotosPageImagesComponent;
  let fixture: ComponentFixture<PhotosPageImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosPageImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosPageImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
