import { Isector } from './../../../models/isector';
import { SectorService } from './../../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.scss'],
})
export class SectorFormComponent implements OnInit {

  sectorID: number;
  sector: Isector;
  sectorForm: FormGroup;
  editNameSector: boolean;
  visibleCardSector: boolean;
  viewCateg: boolean;
  viewTickets: boolean;
  loading: any;
  viewButtomSave: boolean;
  viewButtomEdit: boolean;

  constructor(
    private sectorService: SectorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public toastController: ToastController
  ) {
    const sector = {
      id: null,
      nome: ''
    };
    this.startForm(sector);
   }

  get nome() {
    return this.sectorForm.get('nome');
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.sectorID = parseInt(id, 10);
      this.loadSector(this.sectorID);
      this.editNameSector = false;
      this.visibleCardSector = true;
      this.viewCateg = true;
      this.viewTickets = true;
      this.viewButtomEdit = true;
    }
    else{
      this.visibleCardSector = true;
      this.editNameSector = true;
      this.viewCateg = false;
      this.viewTickets = false;
      this.viewButtomEdit = false;
      this.viewButtomSave = true;
    }
  }

  startForm(isector: Isector) {
    this.sectorForm = new FormGroup({
      nome: new FormControl(isector.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ])
    });
  }

  save(){
    const sector = {...this.sectorForm.value, id: this.sectorID};
    console.log(sector);
    this.sectorService.save(sector).subscribe(
      (response )=> {
        console.log(response);
        this.router.navigate(['/sectors']);
      },
      (error) => {
        console.log(error);
        this.exibirAlerta('Ocorreu um erro ao salvar', 10000, 'danger');
      }
    );
  }

  cancel() {
    this.router.navigate(['cadastro-categoria']);
  }

  edit(){
    this.editNameSector = true;
    this.viewButtomSave = true;
  }

  private loadSector(idSector: number){
    this.sectorService.getById(idSector).subscribe(
      (response) => {
        this.sector = response;
        this.startForm(this.sector);
      },
      (error) => {
        console.log('eee');
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
