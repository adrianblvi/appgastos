import { Component, OnInit, ViewChild } from '@angular/core';
import { OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }
  ngAfterContentChecked(): void {
    this.id = this.idcurriculum.getValue()
  }
  @ViewChild('ids') idcurriculum: OTextInputComponent
  id: string
  ngOnInit() {
  }

}
