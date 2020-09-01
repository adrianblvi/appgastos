import { Component, OnInit, ViewChild } from '@angular/core';
import {
  OFormComponent, ODateInputComponent, OIntegerInputComponent, OTextInputComponent, OTextareaInputComponent, DialogService, ODialogConfig
} from 'ontimize-web-ngx';
import { isUndefined } from 'util';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  @ViewChild('oForm')
  private oForm: OFormComponent;
  @ViewChild('DESCRIPTION')
  private DESCRIPTION: OTextInputComponent;
  @ViewChild('STATUS')
  private STATUS: OIntegerInputComponent;
  @ViewChild('STARTDATE')
  private STARTDATE: ODateInputComponent;
  @ViewChild('ENDDATE')
  private ENDDATE: ODateInputComponent;
  @ViewChild('COMMENTS')
  private COMMENTS: OTextareaInputComponent;
  @ViewChild('OBSERVATIONS')
  private OBSERVATIONS: OTextInputComponent;

  public isVisible: boolean;
  public toSend: boolean;

  constructor(public dialogService: DialogService, public dialog: MatDialog) {
  }
  ngOnInit() {
  }
  onFormDataLoaded(event) {
    if (!(this.oForm.getDataValue('STATUS').value == 0 || this.oForm.getDataValue('STATUS').value == 3)) {
      this.DESCRIPTION.enabled = "no";
      this.STARTDATE.enabled = "no";
      this.ENDDATE.enabled = "no";
      this.COMMENTS.enabled = "no";
    } else {
      this.isVisible = this.oForm.getDataValue('STATUS').value == 3;
      this.toSend = this.oForm.getDataValue('STATUS').value == 0;
    }

  }
  onClick(event) {
    if (!isUndefined(this.OBSERVATIONS)) {
      this.isVisible = false
    }
    this.DESCRIPTION.enabled = "no";
    this.STARTDATE.enabled = "no";
    this.ENDDATE.enabled = "no";
    this.COMMENTS.enabled = "no";
    if (this.oForm.getDataValue('STATUS').value == 3) {
      this.oForm.updateData(this.oForm.getKeysValues(), { 'STATUS': 1, 'OBSERVATIONS': '' }).subscribe((res) => {

      },
        (err) => {
          console.log(err)
        })
    } else {
      this.toSend = false;
      this.oForm.updateData(this.oForm.getKeysValues(), { 'STATUS': 1 }).subscribe((res) => {

      },
        (err) => {
          console.log(err)
        })
    }

  }
  onClickDelete(event) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: `¿Desea eliminar este parte?`
    })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("Pulsado si");
        } else {
          alert("Pulsado No");
        }
      });
    //alert("Pulsado");
  }
  dateChange(event) {
    if (this.ENDDATE.getValue() < this.STARTDATE.getValue()) {
      if (this.dialogService) {
        const config: ODialogConfig = {
          icon: 'clear',
          okButtonText: 'Aceptar'
        };
        this.dialogService.error('Error en las fechas', 'La fecha fin debe ser posterior a la fecha inicio', config);
      }
    }
  }
}
