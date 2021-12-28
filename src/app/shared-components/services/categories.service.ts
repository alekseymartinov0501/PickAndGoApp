import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/categories/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = "https://localhost:44370/api/Categories";

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Category>(this.apiUrl);
  }
}
