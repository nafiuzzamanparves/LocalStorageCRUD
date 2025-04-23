import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://192.168.0.219:8080/teachers';
  private localApiUrl = 'http://localhost:8081/info';

  constructor(private http: HttpClient) { } // dependency injection

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, teacher);
  }

  updateTeacher(teacher: Teacher): Observable<Teacher> {
    // return this.http.put<Teacher>(`${this.apiUrl}/${teacher.id}`, teacher);
    return this.http.put<Teacher>(this.apiUrl + '/' + teacher.id, teacher);
  }

  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  callLocalApi(): Observable<String> {
    let params: HttpParams = new HttpParams();
    params = params.append('aa', 'Nafiuzzaman');
    params = params.append('fatherName', 'Rokonuzzaman');
    params = params.append('bb', 29);
    return this.http.get(this.localApiUrl, { params: params, responseType: 'text' });
  }
}
