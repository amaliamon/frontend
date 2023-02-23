import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { SubjectInServiceService } from '../subject-in-service.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient, private SubjectInService: SubjectInServiceService) {}
  review = new FormControl();

  loading: boolean = false;
  disable: boolean = false;
  getResponse: string = "";
  postResponse: string = "";

  ngOnInit(): void {
    this.status();
    this.disable= true;
  }

  elabora() {
    //creazione e apertura dialog per visualizzare i risultati dell'elaborazione
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "35%";
    dialogConfig.height = "32%";
    dialogConfig.position = {
      'top': '10%',
      'left': '32.5%'
    }
    if(this.review.value!=null){
      this.dialog.open(DialogContentComponent, dialogConfig);
      this.SubjectInService.updateData(this.review.value);
      this.review.setValue(null);
    }

  }


  status() {
    this.loading = true;
    this.http.get<any>('http://127.0.0.1:5555/health_check').subscribe(res => {
      this.getResponse=JSON.stringify(res);
      console.log(res.status);
      if (res.status=="OK") this.disable=false;
      this.loading = false;
    })
    return this.disable;
  }

}
