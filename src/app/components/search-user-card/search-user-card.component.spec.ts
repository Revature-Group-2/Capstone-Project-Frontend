import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchUserCardComponent } from './search-user-card.component';

describe('SearchUserCardComponent', () => {
  let component: SearchUserCardComponent;
  let fixture: ComponentFixture<SearchUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatIconModule, MatExpansionModule, RouterTestingModule, 
        MatDividerModule, MatFormFieldModule], 
      declarations: [ SearchUserCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
