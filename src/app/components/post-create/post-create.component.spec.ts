import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostCreateComponent } from './post-create.component';

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;
  let authServiceStub: Partial<AuthService>;
  let postServiceStub: Partial<PostService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCreateComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: PostService, useValue: postServiceStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
