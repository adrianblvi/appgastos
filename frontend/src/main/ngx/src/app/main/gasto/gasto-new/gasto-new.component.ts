import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';
@Component({
  selector: 'app-gasto-new',
  templateUrl: './gasto-new.component.html',
  styleUrls: ['./gasto-new.component.scss']
})
export class GastoNewComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;

  constructor() { }
  ngOnInit() {
  }

}
