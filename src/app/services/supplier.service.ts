import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Supplier } from '../models/supplier';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiRoute = "/Suppliers";
  private apiServerUrl = environment.apiBaseUrl + this.apiRoute;

  constructor(private http: HttpClient) { }

  public getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiServerUrl}`);
  }

  public getSupplier(supplierId: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiServerUrl}/${supplierId}`);
  }

  public addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiServerUrl}`, supplier);
  }

  public updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiServerUrl}`, supplier);
  }

  public deleteSupplier(supplierId: number): Observable<Supplier> {
    return this.http.delete<Supplier>(`${this.apiServerUrl}/${supplierId}`);
  }
}
