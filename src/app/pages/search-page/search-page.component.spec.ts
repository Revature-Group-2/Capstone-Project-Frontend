import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPageComponent } from './search-page.component';

@Component({
  selector: 'app-search-user-card',
  template: ''
})
class MockSearchUserCard {}

@Component({
  selector: 'app-search-user-sidebar',
  template: ''
})
class MockSearchUserSidebar {}

@Component({
  selector: 'app-navbar',
  template: ''
})
class MockNavbar {}

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatIconModule, MatFormFieldModule, BrowserAnimationsModule, MatInputModule],
      declarations: [ SearchPageComponent, MockSearchUserCard, MockNavbar, MockSearchUserSidebar]
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
