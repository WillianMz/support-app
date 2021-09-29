import { SectorFormComponent } from './sector-form/sector-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectorsPageRoutingModule } from './sectors-routing.module';

import { SectorsPage } from './sectors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectorsPageRoutingModule
  ],
  declarations: [
    SectorsPage,
    SectorFormComponent
  ]
})
export class SectorsPageModule {}
