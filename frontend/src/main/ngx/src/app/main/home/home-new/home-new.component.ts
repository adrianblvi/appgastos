import { Component, OnInit, ViewChild } from '@angular/core';
import { ODateInputComponent, OIntegerInputComponent } from 'ontimize-web-ngx';
import { isUndefined } from 'util';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.scss']
})
export class HomeNewComponent implements OnInit {
  @ViewChild('STATUS')
  private STATUS: OIntegerInputComponent;
  @ViewChild('STARTDATE')
  private STARTDATE: ODateInputComponent;
  @ViewChild('ENDDATE')
  private ENDDATE: ODateInputComponent;
  constructor() { }

  ngOnInit() {
    this.STATUS.setValue('0');
  }
  dateChange(event) {
    if (!(isUndefined(this.STARTDATE.getValue()))) {
      if (!(isUndefined(this.ENDDATE.getValue()))) {
        if (this.ENDDATE.getValue() < this.STARTDATE.getValue()) {
          alert("La fecha fin debe ser posterior a la fecha inicio");
        }
      }
    }
  }
}
