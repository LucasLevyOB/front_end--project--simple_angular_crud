import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost/simpleRestAPIPHP/produto';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  errorHandler(error: any): Observable<any> {
    this.showMessage(`${error.error.response}, error: ${error.error.error ?? ''}`);
    return EMPTY;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, JSON.stringify(product)).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get(this.baseUrl).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  readById(productId: number): Observable<Product> {
    const url: string = `${this.baseUrl}/${productId}`;
    return this.http.get(url).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.pro_id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  delete(productId: number): Observable<Product> {
    const url = `${this.baseUrl}/${productId}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(error => this.errorHandler(error))
    );
  }
}
