import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OComboComponent, OIntegerInputComponent, OCurrencyInputComponent, OFileInputComponent, OImageComponent } from 'ontimize-web-ngx';
import { isUndefined, isNull } from 'util';
declare var Tesseract;

@Component({
  selector: 'app-gasto-new',
  templateUrl: './gasto-new.component.html',
  styleUrls: ['./gasto-new.component.scss']
})
export class GastoNewComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('CATEGORY')
  private CATEGORY: OComboComponent;
  @ViewChild('AMOUNT')
  private AMOUNT: OIntegerInputComponent;
  @ViewChild('PRICE')
  private PRICE: OCurrencyInputComponent;
  @ViewChild('PHOTO')
  private PHOTO: OImageComponent;
  constructor() { }
  ngOnInit() {
  }

  valueChange(event) {
    let a = this.CATEGORY.getSelectedRecord()['PRICE']
    if (isUndefined(a)) {
      this.AMOUNT.enabled = "no";
      this.AMOUNT.setValue(undefined);
    } else {
      this.AMOUNT.enabled = "yes";
      this.PRICE.setValue(a);
    }
  }
  amountChange(event) {
    let a = this.CATEGORY.getSelectedRecord()['PRICE']
    if (!(typeof a === "undefined")) {
      this.PRICE.setValue(this.AMOUNT.getValue() * a);
    } else {
      this.PRICE.setValue(0);
    }
  }

  photoChange(event) {
    if(!(isUndefined(this.PHOTO.getValue()))){
      console.log(this.PHOTO.getSrcValue);
      this.test();
    }
    
  }
  test() {
    Tesseract.recognize('assets/images/TICKET.png').then(function (result) {
     console.log(result.text);
    });
  }
}
