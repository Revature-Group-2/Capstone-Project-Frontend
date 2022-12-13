import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingsPageComponent } from './followings-page.component';

describe('FollowingsPageComponent', () => {
  let component: FollowingsPageComponent;
  let fixture: ComponentFixture<FollowingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
