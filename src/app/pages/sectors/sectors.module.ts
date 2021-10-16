import { CategoriesPageModule } from './../categories/categories.module';
import { SectorFormComponent } from './sector-form/sector-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorsPageRoutingModule } from './sectors-routing.module';

import { SectorsPage } from './sectors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SectorsPageRoutingModule
  ],
  declarations: [
    SectorsPage,
    SectorFormComponent
  ]
})
export class SectorsPageModule {}
