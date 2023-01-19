import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartementService {
  constructor(private httpClient: HttpClient) {}

  getListDepartements(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/departements`
    );
  }

  postDepartements(data: any): Observable<any> { 
    return this.httpClient.post<any>(
      `${environment.apiUrl}/${environment.prefix}/departements`,
      data
    );
  }

  getOneDepartement(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/departements/${id}`
    );
  }
}
