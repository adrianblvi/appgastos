import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OFormComponent, OComboComponent, OIntegerInputComponent, OCurrencyInputComponent } from 'ontimize-web-ngx';
import { isUndefined } from 'util';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home-gasto-new',
  templateUrl: './home-gasto-new.component.html',
  styleUrls: ['./home-gasto-new.component.scss']
})
export class HomeGastoNewComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('IDPARTE')
  private IDPARTE: OIntegerInputComponent;
  @ViewChild('CATEGORY')
  private CATEGORY: OComboComponent;
  @ViewChild('AMOUNT')
  private AMOUNT: OIntegerInputComponent;
  @ViewChild('PRICE')
  private PRICE: OCurrencyInputComponent;
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.IDPARTE.setValue(this.activatedRoute.snapshot.params['IDPARTE']);
    console.log(this.IDPARTE.getValue());
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

}
