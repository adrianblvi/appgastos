import { Component, OnInit, ViewChild } from '@angular/core';
import { OImageComponent } from 'ontimize-web-ngx';
import { isUndefined } from 'util';
@Component({
  selector: 'app-home-gasto-detail',
  templateUrl: './home-gasto-detail.component.html',
  styleUrls: ['./home-gasto-detail.component.scss']
})
export class HomeGastoDetailComponent implements OnInit {
  @ViewChild('PHOTO')
  private PHOTO: OImageComponent;


  constructor() { }

  ngOnInit() {
  }
  onFormDataLoaded(event) {
    if (isUndefined(this.PHOTO.getValue())) {
      this.PHOTO.fullScreenButton = false;
    } else {
      this.PHOTO.fullScreenButton = true;
    }
  }
  onPhotoChange(event) {
    if (isUndefined(this.PHOTO.getValue())) {
      this.PHOTO.fullScreenButton = false;
    } else {
      this.PHOTO.fullScreenButton = true;
    }
  }
}
