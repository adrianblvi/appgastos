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
  private a: number;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    if (!(this.activatedRoute.snapshot.params['IDPARTE'] == 'new')) {
      console.log("nonuevo");
      this.IDPARTE.setValue(this.activatedRoute.snapshot.params['IDPARTE']);
    } else {
      console.log("Nuevo");
      console.log(this.IDPARTE.getValue());
      this.IDPARTE.setValue(null);
    }

  }
  valueChange(event) {
    if (isUndefined(this.CATEGORY.getSelectedRecord()['PRICE'])) {
      this.AMOUNT.enabled = "no";
      this.AMOUNT.setValue(undefined);
    } else {
      this.a = this.CATEGORY.getSelectedRecord()['PRICE']
      this.AMOUNT.enabled = "yes";
      this.PRICE.setValue(this.a);
    }
  }
  amountChange(event) {
    if (!isUndefined(this.a)) {
      this.PRICE.setValue(this.AMOUNT.getValue() * this.a);
    } else {
      this.PRICE.setValue(0);
    }

  }
}