import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { DisplayModalService } from '../display-modal.service';
import { CategoriesResponse, Category } from '../../models/category';
import { environment } from '../../../../environments/environment';

@Injectable()
export class CategoriesApiService {

  private baseUrl = `${environment.apiUrl}/categories`;

  constructor(
    private httpClient: HttpClient,
    private displayModalService: DisplayModalService) {
  }

  public getAll = (): Observable<CategoriesResponse> => {
    return this.httpClient.get<CategoriesResponse>(this.baseUrl).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not retrieve the list of categories', e);
        return throwError(e);
      })
    );
  }

  public getCategory = (id: string): Observable<any> => {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not retrieve the category', e);
        return throwError(e);
      })
    );
  }

  public createCategory = ({ name, description }): Observable <any> => {
    return this.httpClient.post(this.baseUrl, { name, description }).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not create the category', e);
        return throwError(e);
      })
    );
  }

  public updateCategory = (id: string, body: any): Observable <any> => {
    return this.httpClient.put(`${this.baseUrl}/${id}`, body).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not update the category', e);
        return throwError(e);
      })
    );
  }

  public removeCategory = (id: string): Observable<any> => {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not remove the category', e);
        return throwError(e);
      })
    );
  }
}
