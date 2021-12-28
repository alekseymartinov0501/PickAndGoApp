import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: any = {};

  detailViewActive: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onProductClick() {
    this.detailViewActive = !this.detailViewActive;
  }

}
