import { CategoryService } from './../../services/category.service';
import { Icategory } from './../../models/icategory';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  /* categories: Icategory[];
  category: Icategory;
  sectorId: number;
  success: boolean;
  message: string; */

  categories: Icategory[];
  success: boolean;
  message: string;
  loading: any;

  constructor(
    private categoryService: CategoryService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) { }

  async ngOnInit() {
    await this.listAll();
  }

  async presentLoading(mensagem: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensagem
    });

    return this.loading.present();
  }

  async listAll(){
    this.presentLoading('aguarde...');

    setTimeout(() => {
      this.categoryService.getAll().subscribe(
        (response) => {
          this.categories = response;
          /* this.success = response['sucesso'];
          this.message = response['mensagem']; */
        },
        (error) => {
          this.categories = [];
          this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'danger');
        }
      );
      this.loading.dismiss();
    }, 2000);
  }

  private exibirAlerta(msg: string, temp: number, cor: string){
    this.toastController.create({
      message: msg,
      duration: temp,
      keyboardClose: true,
      color: cor
    }).then(t => t.present());
  }

}
