import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  constructor() {
  }

  ngOnInit() {
  }
}
