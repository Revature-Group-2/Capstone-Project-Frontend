import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl: string = `${environment.baseUrl}/post`

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials} )
  }

  upsertPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postUrl}`, post, {headers: environment.headers, withCredentials: environment.withCredentials})
  }

  upsertComment(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postUrl}/comment`, post, {headers: environment.headers, withCredentials: environment.withCredentials})
  }

  userPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
