import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'bar-chart' },
    { title: 'Empresas', url: '/companies', icon: 'business' },
    { title: 'Setores', url: '/sectors', icon: 'folder-open' },
    { title: 'Categorias', url: '/categories', icon: 'layers' },
    { title: 'Contatos', url: '/contacts', icon: 'people' },
    { title: 'Tickets', url: '/tickets', icon: 'ticket' },
    { title: 'Configurações', url: '/settings', icon: 'warning' }
  ];

  constructor() {}

}
