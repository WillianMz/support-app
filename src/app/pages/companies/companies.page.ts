import { CompanyService } from './../../services/company.service';
import { Icompany } from './../../models/icompany';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {

  companies: Icompany[];

  constructor(private serviceCompany: CompanyService) { }

  async ngOnInit() {
    //this.list();
    await this.getAllTasks();
  }

  async getAllTasks(): Promise<void> {
    const tasks = await this.serviceCompany.getAll();
    console.log(tasks);

    if (tasks) {
      this.companies = tasks;
    } else {
      /* this.tasks = []; */
    }
  }

  list(){
    setTimeout(() => {
      /* this.serviceCompany.getAll().subscribe(
        (response) => {
          this.companies = response;
      },
      (error) => {
        console.log(error);
      }
    ); */
    }, 5000);
  }

}
