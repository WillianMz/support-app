import { SectorService } from './../../services/sector.service';
import { Isector } from './../../models/isector';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.page.html',
  styleUrls: ['./sectors.page.scss'],
})
export class SectorsPage implements OnInit {

  sectors: Isector[];
  sector: Isector;
  sectorId: number;
  success: boolean;
  message: string;
  loading: any;

  constructor(
    private sectorService: SectorService,
    public loadingController: LoadingController,
    public toastController: ToastController
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
      this.sectorService.getAll().subscribe(
        (response) => {
          this.sectors = response;
          /* this.success = response['sucesso'];
          this.message = response['mensagem']; */
        },
        (error) => {
          this.sectors = [];
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
