import { CategoryService } from './../../services/category.service';
import { Icategory } from './../../models/icategory';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})

export class CategoriesPage implements OnInit {

  //@Input() idSector: string;

  idSector: number;
  categories: Icategory[];
  success: boolean;
  message: string;
  loading: any;

  constructor(
    private categoryService: CategoryService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    /* const id = this.activatedRoute.snapshot.paramMap.get('idSector');
    console.log(id);
    if(this.idSector){
      this.filterBySector();
    } */

    /* this.activatedRoute.queryParams.subscribe(
      params => {
        console.log(params);
        //this.filterBySector(params.sector);
        this.idSector = parseInt(params.sector, 10);
        console.log(this.idSector);
      }
    );

    if(this.idSector){
      this.filterBySector(this.idSector);
    } */
  }

  ionViewWillEnter(){
    console.log(1);

    this.activatedRoute.queryParams.subscribe(
      params => {
        console.log(params);
        //this.filterBySector(params.sector);
        this.idSector = parseInt(params.sector, 10);
        console.log(this.idSector);
      }
    );


    if(this.idSector){
      console.log('aaa');
      this.filterBySector(this.idSector);
    }else{
      this.listAll();
    }

  }

  /* ionViewDidEnter(){
    console.log(2);
  } */

  /* ionViewWillLeave(){
    console.log(3);
  }

  ionViewDidLeave(){
    console.log(4);
  } */


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

  private filterBySector(idSector: number){
    console.log('filtro por setor');
    this.categoryService.getBySector(idSector).subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error) => {
        this.categories = [];
        this.exibirAlerta('Nenhuma categoria encontrada', 10000, 'danger');
      }
    );
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
