import { Component, OnInit, ViewChild } from '@angular/core';
import { OImageComponent, OFormComponent, OntimizeService, OIntegerInputComponent, OTextInputComponent, ODateInputComponent, OComboComponent, OCurrencyInputComponent, OTextareaInputComponent } from 'ontimize-web-ngx';
import { isUndefined } from 'util';
@Component({
  selector: 'app-home-gasto-detail',
  templateUrl: './home-gasto-detail.component.html',
  styleUrls: ['./home-gasto-detail.component.scss']
})
export class HomeGastoDetailComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('IDPARTE')
  private IDPARTE: OIntegerInputComponent;
  @ViewChild('CONCEPT')
  private CONCEPT: OTextInputComponent;
  @ViewChild('STARTDATE')
  private STARTDATE: ODateInputComponent;
  @ViewChild('CATEGORY')
  private CATEGORY: OComboComponent;
  @ViewChild('AMOUNT')
  private AMOUNT: OIntegerInputComponent;
  @ViewChild('PRICE')
  private PRICE: OCurrencyInputComponent;
  @ViewChild('PHOTO')
  private PHOTO: OImageComponent;
  @ViewChild('COMMENTS')
  private COMMENTS: OTextareaInputComponent;
  public isEnabled: boolean;
  public isVisible: boolean;
  private a: number;

  constructor(private ontimizeService: OntimizeService) { }

  ngOnInit() {
  }
  onFormDataLoaded(data: any) {
    let idtoQuery = this.IDPARTE.getValue();
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('gastos'));
    const filter = {
      IDPARTE: data.IDPARTE
    };
    const columns = ['STATUS'];
    this.ontimizeService.query(filter, columns, 'parte', { IDPARTE: idtoQuery }).subscribe(resp => {
      if (resp.code === 0) {
        let status = resp.data[0]['STATUS'];
        if (!(status == 3 || status == 0)) {
          this.CONCEPT.enabled = "no";
          this.STARTDATE.enabled = "no";
          this.CATEGORY.enabled = "no";
          this.AMOUNT.enabled = "no";
          if (isUndefined(this.AMOUNT.getValue())) {
            this.isVisible = false;
          } else {
            this.isVisible = true;
          }
          this.PRICE.enabled = "no";
          this.isEnabled = false;
        } else {
          if (isUndefined(this.PHOTO.getValue())) {
            this.PHOTO.fullScreenButton = false;
          } else {
            this.PHOTO.fullScreenButton = true;
          }
          this.isEnabled = true;
          this.isVisible = true;

        }
      } else {
        console.error(resp);
      }
    });

  }
  onPhotoChange(event) {
    if (isUndefined(this.PHOTO.getValue())) {
      this.PHOTO.fullScreenButton = false;
    } else {
      this.PHOTO.fullScreenButton = true;
    }
  }
  valueChange(event) {
    if (this.isEnabled) {
      if (isUndefined(this.CATEGORY.getSelectedRecord()['PRICE'])) {
        this.AMOUNT.enabled = "no";
        this.AMOUNT.setValue(undefined);
      } else {
        this.a = this.CATEGORY.getSelectedRecord()['PRICE']
        this.AMOUNT.enabled = "yes";
        this.PRICE.setValue(this.a);
      }
    }
  }
  amountChange(event) {
    if (this.isEnabled) {
      if (!isUndefined(this.a)) {
        this.PRICE.setValue(this.AMOUNT.getValue() * this.a);
      } else {
        this.PRICE.setValue(0);
      }
    }


  }
}
