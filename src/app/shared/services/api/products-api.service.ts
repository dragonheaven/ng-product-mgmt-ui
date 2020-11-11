import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {Product, ProductsResponse} from '../../models/product';
import { DisplayModalService } from '../display-modal.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductsApiService {
  private baseUrl = `${environment.apiUrl}/products`;
  constructor(
    private httpClient: HttpClient,
    private displayModalService: DisplayModalService) {
  }

  public getAll = (): Observable<ProductsResponse> => {
    return this.httpClient.get<ProductsResponse>(this.baseUrl).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not retrieve the list of products', e);
        return throwError(e);
      })
    );
  }

  public getProduct = (id: string): Observable<any> => {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not retrieve the product', e);
        return throwError(e);
      })
    );
  }

  public createProduct = (product: any): Observable <any> => {
    return this.httpClient.post(this.baseUrl, product).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not create the product', e);
        return throwError(e);
      })
    );
  }

  public updateProduct = (id: string, product: any): Observable <any> => {
    return this.httpClient.put(`${this.baseUrl}/${id}`, product).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not create the product', e);
        return throwError(e);
      })
    );
  }

  public removeProduct = (id: string): Observable<any> => {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => {
        this.displayModalService.showErrorModal('Could not remove the product', e);
        return throwError(e);
      })
    );
  }
}
