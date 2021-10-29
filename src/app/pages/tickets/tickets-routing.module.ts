import { TicketOpenComponent } from './ticket-open/ticket-open.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsPage } from './tickets.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsPage
  },
  { path: 'new', component: TicketOpenComponent },
  { path: ':id/edit', component: TicketFormComponent },
  { path: 'cancel/:id', component: TicketFormComponent},
  { path: 'end/:id', component: TicketFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsPageRoutingModule {}
