import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OComboComponent, OIntegerInputComponent } from 'ontimize-web-ngx';
import { isUndefined } from 'util';
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
  private PRICE: OIntegerInputComponent;
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
    }else{
      this.PRICE.setValue(0);
    }

  }
}
