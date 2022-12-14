import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-feed-page',
  templateUrl: './post-feed-page.component.html',
  styleUrls: ['./post-feed-page.component.css']
})

export class PostFeedPageComponent implements OnInit {

  postForm = new FormGroup({
    text: new FormControl(''),
    imageUrl: new FormControl('')
  })

  posts: Post[] = [];
  createPost:boolean = false;
  profanity: boolean = false;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
    this.postService.getAllSubscribedPosts().subscribe(
      (response) => {
        this.posts = response
      }
    )
  }

  toggleCreatePost = () => {
    this.createPost = !this.createPost
  }

  submitPost = (e: any) => {
    e.preventDefault();
    this.postService.upsertPost(new Post(0, this.postForm.value.text || "", this.postForm.value.imageUrl || "", 0, this.authService.currentUser, []))
      .subscribe({
        next: (response) => {
          this.posts = [response, ...this.posts]
          this.profanity = false;
          this.toggleCreatePost()
        }, 
        error: error => {
          if (error.error === "profanity") {
            this.profanity = true;
          }
        },
        complete: () => {
          this.postForm.controls.imageUrl.setValue('')
          this.postForm.controls.text.setValue('')
          this.profanity = false;
        }
    })
  }

  toggleProfanity = () => {
    console.log("profanity");
    this.profanity = false;
  }

  onPostRemove(e: any) {
    this.posts = this.posts.filter(post => post.id != e.id);
  }
}

