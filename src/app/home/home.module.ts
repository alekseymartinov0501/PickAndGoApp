import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedComponentsModule
  ]
})
export class HomeModule { }
