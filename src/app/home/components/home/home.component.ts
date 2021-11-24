import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { CategoriesService } from 'src/app/shared-components/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categories: Category[] = [];

  constructor(
    private categoryService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories(){
    this.categoryService.getCategories()
      .subscribe((res: any) => {
        this.categories = res;
        console.log(res);
      })
  }

  categoriesView(id: number){
    this.router.navigate(["/categories" + id]);
  }

}
