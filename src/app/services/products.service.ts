import { Products } from './../models/products.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL = "http://localhost/minipro/public/api/";

  constructor(private http: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }

  // อ่านข้อมูล Product  ทั้งหมด  (Method GET)
  getProducts(): Observable<Products> {
    return this.http.get<Products>(this.apiURL + 'products')
  }

  // อ่านข้อมูล Product By ID (Method GET)
  getProduct(id: string): Observable<Products> {
    return this.http.get<Products>(this.apiURL + 'product/' + id)
  }

  // เพิ่มข้อมูลสินค้าใหม่  (Method POST)
  createProduct(product: string): Observable<Products> {
    return this.http.post<Products>(this.apiURL + "products", JSON.stringify(product), this.httpOptions)
  }

  // แก้ไขข้อมุล Product (Method PUT)
  updateProduct(id: string, product: string): Observable<Products> {
    return this.http.put<Products>(this.apiURL + "product/" + id, JSON.stringify(product), this.httpOptions)
  }

  // ลบรายการ Product  (Method DELETE)
  deleteProduct(id: string) {
    return this.http.delete<Products>(this.apiURL + "product/" + id, this.httpOptions)
  }

}
