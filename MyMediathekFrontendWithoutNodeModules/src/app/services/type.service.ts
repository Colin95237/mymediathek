import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../interfaces/Type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {

  private apiUrl = 'http://localhost:8080/api/type';

  constructor(private http: HttpClient) {}

  getAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl);
  }

  getTypeById(id: number): Observable<Type> {
    return this.http.get<Type>(`${this.apiUrl}/${id}`);
  }

  addType(type: Type): Observable<Type> {
    return this.http.post<Type>(`${this.apiUrl}`, type);
  }

  updateType(type: Type): Observable<Type> {
    return this.http.put<Type>(`${this.apiUrl}`, type);
  }

  deleteType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
