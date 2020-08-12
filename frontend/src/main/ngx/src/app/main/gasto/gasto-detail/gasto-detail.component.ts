import { Component, OnInit, ViewChild,Injector } from '@angular/core';
import { OFormComponent,NavigationService } from 'ontimize-web-ngx';
@Component({
  selector: 'app-gasto-detail',
  templateUrl: './gasto-detail.component.html',
  styleUrls: ['./gasto-detail.component.scss']
})
export class GastoDetailComponent implements OnInit {
  @ViewChild('oForm')
  private oForm: OFormComponent;
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
  ngOnInit() {
  }

}
