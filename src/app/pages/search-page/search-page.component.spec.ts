import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { SearchService } from 'src/app/services/search.service';

import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let searchServiceStub: Partial<SearchService>;
  let profileServiceStub: Partial<ProfileService>;


  searchServiceStub = {
    getProfiles(limitProfiles: number) {
      let profiles: Profile[] = []
      return defer(()=>Promise.resolve(profiles));
    }
  }

  profileServiceStub = {
    getOwnProfile() {
      let profile: Profile = new Profile();
      return defer(()=>Promise.resolve(profile));
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      providers: [
        {provide: SearchService, useValue: searchServiceStub},
        {provide: ProfileService, useValue: profileServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
