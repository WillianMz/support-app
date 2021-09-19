import { SectorService } from './../../services/sector.service';
import { Isector } from './../../models/isector';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private sectorService: SectorService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  listAll(){
    setTimeout(() => {
      this.sectorService.getAll().subscribe(
        (response) => {
          this.sectors = response['dados'];
          this.success = response['sucesso'];
          this.message = response['mensagem'];
          console.log(this.sectors);
        },
        (error) => {
          this.sectors = [];
        }
      );
    }, 5000);
  }

}
