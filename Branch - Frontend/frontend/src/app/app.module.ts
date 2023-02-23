import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';

import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from '@angular/cdk/dialog';

import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { NavbarComponent } from './navbar/navbar.component';


import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'parent', component: DialogContentComponent},
  { path: 'child', component: DialogComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogContentComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,

    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
