import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    console.log('Upload image')
  }
}
