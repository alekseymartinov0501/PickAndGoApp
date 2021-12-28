import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/categories/models/category';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product>(this.apiUrl + "products");
  }

  getProductsByCategoryId(id: string){
    return this.http.get<Product>(this.apiUrl + "products/get-by-category-id/" + id);
  }

}
