import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private url: string = `${environment.baseUrl}/subscription`;
  private headers = {headers: environment.headers, withCredentials: environment.withCredentials};

  constructor(private http: HttpClient) { }

  public subscribeProfile(id: number) {
    return this.http.patch(this.url, { id }, this.headers);
  }

  public unsubscribeProfile(id: number) {
    return this.http.patch(`${this.url}/unsubscribe`, { id }, this.headers)
  }
}
