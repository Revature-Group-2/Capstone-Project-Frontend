import { Target } from '@angular/compiler';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { EditProfileComponent } from 'src/app/components/profile/edit-profile/edit-profile.component';
import Post from 'src/app/models/Post';
import { IProfile } from 'src/app/models/Profile';
import { IProfileHeroBanner, ProfileHeroBanner } from 'src/app/models/ProfileHeroBanner';
import { ProfilePersonalInfo } from 'src/app/models/ProfilePersonalInfo';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnDestroy {

  routerEventSubscription: Subscription;
  activatedRouteSubscription: Subscription;

  isEditable = true;

  posts!: Post[];
  user!: User;

  profileHeroBanner: ProfileHeroBanner = new ProfileHeroBanner();
  profilePersonalInfo: ProfilePersonalInfo = new ProfilePersonalInfo();
  isProfileToDisplay: boolean;

  constructor(private authService: AuthService, private postService: PostService, public router: Router, private profileService: ProfileService,
              private activatedRoute: ActivatedRoute, public dialog: MatDialog) 
  {
    /* A hook detects event of changing route inside of a profile */
    this.routerEventSubscription = router.events
      .pipe( filter(event => event instanceof NavigationEnd))
      .subscribe((val) => {

      this.isEditable = true;

      /* Defined query parameters if provided and makes appropriate request to Profile API */
      this.activatedRouteSubscription = this.activatedRoute.queryParams
        .pipe( filter( params =>  params['id']) )
        .subscribe( params => {
          this.isEditable = false;

          this.profileService.getProfile(params['id']).subscribe({
            next: (profile : IProfile) => {
              this.manageProfileHeroBanner(profile);
              this.manageProfilePersonalInfo(profile);
            },
            error: () => { this.router.navigate(['/404']); }
          }) 
        }
      );

      /* Allows edit profile accessed on /profile route */
      if (this.isEditable) {
        this.profileService.getOwnProfile().subscribe( (profile: IProfile) => {
          this.isEditable = true;
          this.manageProfileHeroBanner(profile);
          this.manageProfilePersonalInfo(profile);
        })

        /* Restored session and takes userPosts */
        this.authService.restoreSession().subscribe( user => {
          this.user = user;
    
          this.postService.userPosts(this.user.id).subscribe( posts => { this.posts = posts })
        })
      }
    });
  }

  /* Filled everything needed for ProfileHeroBanner component */
  private manageProfileHeroBanner(profile: IProfile) {
    this.profileHeroBanner = new ProfileHeroBanner({...profile, ...profile.owner})
  }

  private manageProfilePersonalInfo(profile: IProfile) {
      this.profilePersonalInfo = new ProfilePersonalInfo({...profile});
      this.isProfileToDisplay = ProfilePersonalInfo.hasSomethingToDisplay({...profile})
  }

  openDialog() {
    this.dialog.open(EditProfileComponent, {
      data: { componentToDisplay: "personal data"}
    });
  }

  /* Prevents some bugs related to routing */
  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
    this.activatedRouteSubscription.unsubscribe();
  };
}
