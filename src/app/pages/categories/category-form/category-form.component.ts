import { CategoryService } from './../../../services/category.service';
import { Icategory } from './../../../models/icategory';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SectorService } from 'src/app/services/sector.service';
import { Isector } from 'src/app/models/isector';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {

  categoryID: number;
  category: Icategory;
  sectors: Isector[];
  categForm: FormGroup;
  editName: boolean;
  visibleCardCateg: boolean;
  viewTickets: boolean;
  viewButtomSave: boolean;
  viewButtomEdit: boolean;

  constructor(
    private categoryService: CategoryService,
    private sectorService: SectorService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public toastController: ToastController
  ) {
    const categ = {
      id: null,
      nome: '',
      sectorID: null,
      sector: null
    };
    this.startForm(categ);
   }

  get nome() {
    return this.categForm.get('nome');
  }

  get sectorID() {
    return this.categForm.get('sectorID');
  }

  async ngOnInit() {
    await this.listSectors();

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.categoryID = parseInt(id, 10);
      this.loadCategory(this.categoryID);
      this.editName = false;
      this.visibleCardCateg = true;
      this.viewTickets = true;
      this.viewButtomEdit = true;
    }
    else{
      this.visibleCardCateg = true;
      this.editName = true;
      this.viewTickets = false;
      this.viewButtomEdit = false;
      this.viewButtomSave = true;
    }
  }

  startForm(icategory: Icategory) {
    this.categForm = new FormGroup({
      nome: new FormControl(icategory.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),
      sectorID: new FormControl(icategory.sectorID, Validators.required),
    });
  }

  save(){
    const category = {...this.categForm.value, id: this.categoryID};
    console.log(category);
    this.categoryService.save(category).subscribe(
      (response )=> {
        console.log(response);
        this.router.navigate(['/categories']);
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
    this.editName = true;
    this.viewButtomSave = true;
  }

  async listSectors(){
    //this.presentLoading('aguarde...');

    setTimeout(() => {
      this.sectorService.getAll().subscribe(
        (response) => {
          this.sectors = response;
        },
        (error) => {
          this.sectors = [];
          this.exibirAlerta('Ocorreu um erro ao consultar dados', 10000, 'danger');
        }
      );
    }, 2000);
  }

  private loadCategory(idCategory: number){
    this.categoryService.getById(idCategory).subscribe(
      (response) => {
        this.category = response;
        console.log(response);
        this.startForm(this.category);
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
