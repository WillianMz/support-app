import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart' },
    { title: 'Categorias', url: '/categories', icon: 'layers' },
    { title: 'Setores', url: '/sectors', icon: 'folder-open' },
    { title: 'Contatos', url: '/contacts', icon: 'people' },
    { title: 'Tickets', url: '/tickets', icon: 'ticket' },
    { title: 'Atendimentos', url: '/calls', icon: 'list' },
    { title: 'Configurações', url: '/settings', icon: 'warning' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
