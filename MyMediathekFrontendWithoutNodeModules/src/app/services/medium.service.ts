import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medium } from '../interfaces/Medium';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediumService {
  private apiUrl = 'http://localhost:8080/api/medium';

  constructor(private http: HttpClient) {}

  getAllMedia(): Observable<Medium[]> {
    return this.http.get<Medium[]>(this.apiUrl);
  }

  getMediumById(id: number): Observable<Medium> {
    return this.http.get<Medium>(`${this.apiUrl}/${id}`);
  }

  getMediaByTypeId(id: number): Observable<Medium[]> {
    return this.http.get<Medium[]>(`${this.apiUrl}/type/${id}`);
  }

  addMedium(medium: Medium): Observable<Medium> {
    return this.http.post<Medium>(`${this.apiUrl}`, medium);
  }

  updateMedium(medium: Medium): Observable<Medium> {
    return this.http.put<Medium>(`${this.apiUrl}`, medium);
  }

  deleteMedium(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
