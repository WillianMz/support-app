import { CategoryFormComponent } from './category-form/category-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  { path: '', component: CategoriesPage },
  { path: 'new', component: CategoryFormComponent },
  { path: ':id', component: CategoryFormComponent },
  { path: 'sector/:id', component: CategoriesPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
