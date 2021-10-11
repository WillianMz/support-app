import { CategoryFormComponent } from './category-form/category-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CategoriesPageRoutingModule
  ],
  declarations: [
    CategoriesPage,
    CategoryFormComponent
  ]
})
export class CategoriesPageModule {}
