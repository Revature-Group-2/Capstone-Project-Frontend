import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserSidebarComponent } from './search-user-sidebar.component';

describe('SearchUserSidebarComponent', () => {
  let component: SearchUserSidebarComponent;
  let fixture: ComponentFixture<SearchUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
