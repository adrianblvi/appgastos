import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gasto-new',
  templateUrl: './gasto-new.component.html',
  styleUrls: ['./gasto-new.component.scss']
})
export class GastoNewComponent implements OnInit {

  protected dateValue: Date = new Date();


  constructor() { }
  getValueDate() {
    return this.dateValue;
  }
  ngOnInit() {
  }

}
