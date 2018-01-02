import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
// firebase
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import  {environment} from '../environments/environment.prod';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

// Angular material
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule} from '@angular/material';
import { AlertsComponent } from './alerts/alerts.component';
import { StatisticComponent } from './statistic/statistic.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full',canActivate: []},
  {path:'dashboard', component:DashboardComponent},  

]

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlertsComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFireDatabaseModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
