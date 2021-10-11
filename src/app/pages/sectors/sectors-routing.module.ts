import { SectorFormComponent } from './sector-form/sector-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectorsPage } from './sectors.page';

const routes: Routes = [
  {
    path: '',
    component: SectorsPage
  },
  { path:'new', component: SectorFormComponent },
  { path: ':id', component: SectorFormComponent },
  { path: ':id/edit', component: SectorFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectorsPageRoutingModule {}
