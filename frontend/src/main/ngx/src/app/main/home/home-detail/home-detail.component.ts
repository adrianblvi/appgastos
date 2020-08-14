import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, ODateInputComponent, OIntegerInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('STATUS')
  private STATUS: OIntegerInputComponent;
  @ViewChild('STARTDATE')
  private STARTDATE: ODateInputComponent;
  @ViewChild('ENDDATE')
  private ENDDATE: ODateInputComponent;
  constructor() {
  }
  ngOnInit() {
  }
  getStatus() {
    let status = this.STATUS.getValue();
    console.log(status);
    return;
    /*switch (status) {
      case 0:
        console.log("SIN ENVIAR");
        return false;
      case 1:
        console.log("ENVIADO");
        return false;
      case 2:
        console.log("ACEPTADO");
        return false;
      case 3:
        console.log("RECHAZADO");
        return true;
    }*/
  }
  dateChange(event) {
    if (this.ENDDATE.getValue() < this.STARTDATE.getValue()) {
      alert("La fecha fin debe ser posterior a la fecha inicio");
    }
  }
}
