import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    {route: '#', name: 'Inicio'},
    {route: '#', name: 'Productos'},
    {route: '#', name: 'Servicios'},
    {route: '#', name: 'Contactanos'},
    {route: '#', name: 'Categorias'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
