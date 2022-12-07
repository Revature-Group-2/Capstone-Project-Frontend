import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChangePassword, IGeneralInformation, IProfile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl: string = `${environment.baseUrl}/profile`;
  private headers = {headers: environment.headers, withCredentials: environment.withCredentials};

  constructor(private http: HttpClient) {}

  getOwnProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.profileUrl}`, this.headers);
  }

  getProfile(id: number): Observable<IProfile> {
    return this.http.get<IProfile>(`${this.profileUrl}/${id}`, this.headers);
  }

  changePassword(changePassword: IChangePassword): Observable<any> {
    return this.http.post<IChangePassword>(`${this.profileUrl}/change-password`, changePassword, this.headers);
  }

  getGeneralInformation(): Observable<IGeneralInformation> {
    return this.http.get<IGeneralInformation>(`${this.profileUrl}/general-information`, this.headers);
  }

  updateGeneralInformation(generalInformation: IGeneralInformation) {
    return this.http.post<IGeneralInformation>(`${this.profileUrl}/general-information`, generalInformation, this.headers)
  }
}
