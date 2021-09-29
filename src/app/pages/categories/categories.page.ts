import { CategoryService } from './../../services/category.service';
import { Icategory } from './../../models/icategory';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Icategory[];
  category: Icategory;
  sectorId: number;
  success: boolean;
  message: string;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    setTimeout(() => {
      this.categoryService.getAll().subscribe(
        (response) => {
          this.categories = response['dados'];
          this.success = response['sucesso'];
          this.message = response['mensagem'];
          console.log(this.categories);
        },
        (error) => {
          this.categories = [];
        }
      );
    }, 5000);
  }

}
