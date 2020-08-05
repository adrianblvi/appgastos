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
  @ViewChild('ID_PARTE')
  private ID_PARTE : OIntegerInputComponent;
  @ViewChild('CATEGORY')
  private CATEGORY: OComboComponent;
  @ViewChild('AMOUNT')
  private AMOUNT: OIntegerInputComponent;
  @ViewChild('PRICE')
  private PRICE: OCurrencyInputComponent;
  constructor(private activatedRoute: ActivatedRoute) {
    let id_aux = this.activatedRoute.snapshot.params['IDPARTE'];
    
  }
  ngOnInit() {
    this.ID_PARTE.setValue(this.activatedRoute.snapshot.params['IDPARTE']);
    console.log(this.ID_PARTE.getValue());
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
