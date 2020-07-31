import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
@Component({
  selector: 'app-gasto-detail',
  templateUrl: './gasto-detail.component.html',
  styleUrls: ['./gasto-detail.component.scss']
})
export class GastoDetailComponent implements OnInit {
  @ViewChild('oForm')
  private oForm: OFormComponent;
  constructor(
    private ontimizeService: OntimizeService) {

  }


  ngOnInit() {
  }
  
}
