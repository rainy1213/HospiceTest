import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserPreference } from '../shared/models/userpreference.model';

@Injectable()
export class UserPreferenceService {

  constructor(private http: HttpClient) { }

  getUserPreferences(): Observable<UserPreference[]> {
    return this.http.get<UserPreference[]>('/api/userpreferences');
  }

  countUserPreferences(): Observable<number> {
    return this.http.get<number>('/api/userpreferences/count');
  }

  addUserPreference(userpreference: UserPreference): Observable<UserPreference> {
    return this.http.post<UserPreference>('/api/userpreference', userpreference);
  }

  getUserPreference(userpreference: UserPreference): Observable<UserPreference> {
    return this.http.get<UserPreference>(`/api/userpreference/${userpreference._id}`);
  }

  editUserPreference(userpreference: UserPreference): Observable<any> {
    return this.http.put(`/api/userpreference/${userpreference._id}`, userpreference, { responseType: 'text' });
  }

  deleteUserPreference(userpreference: UserPreference): Observable<any> {
    return this.http.delete(`/api/userpreference/${userpreference._id}`, { responseType: 'text' });
  }

}
