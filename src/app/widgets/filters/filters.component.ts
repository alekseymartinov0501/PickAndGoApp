import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/categories/models/category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

@Input()
categories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
