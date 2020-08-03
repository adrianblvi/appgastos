import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OComboComponent, ODateInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('STATUS')
  private STATUS: OComboComponent;
  @ViewChild('ENDDATE')
  ENDDATE: ODateInputComponent;


  constructor() {
  }
  ngOnInit() {
  }
  valueChange(event) {
    if (this.STATUS.getValue() == 1) {
      let date: Date = new Date();
     this.ENDDATE.setValue(date.getTime());
    }else{
      this.ENDDATE.setValue(undefined);
    }
  }

}
