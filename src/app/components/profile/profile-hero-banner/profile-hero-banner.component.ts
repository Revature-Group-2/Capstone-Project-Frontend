import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProfileHeroBanner } from 'src/app/models/ProfileHeroBanner';
import { ImageService } from 'src/app/services/image.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile-hero-banner',
  templateUrl: './profile-hero-banner.component.html',
  styleUrls: ['./profile-hero-banner.component.css']
})
export class ProfileHeroBannerComponent implements OnInit {

  @Input()
  isEditable: boolean = false;

  @Input()
  heroBannerInformation: IProfileHeroBanner;

  constructor(private dialog: MatDialog, private imageService: ImageService) {}

  ngOnInit(): void {
    this.dialog.open(EditProfileComponent);
  }

  openDialog() {
    this.dialog.open(EditProfileComponent);
  }

}
