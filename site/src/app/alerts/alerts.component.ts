import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

   // Define a users property to hold our user data
   alerts: any;
  
   // Create an instance of the DataService through dependency injection
   constructor(private dataService: DataService) {
     this.dataService.getAlerts().subscribe(alerts => {
       this.alerts = alerts;
       console.log(this.alerts);
     })
 }



  ngOnInit() {
  }

  navigate(url){
    window.open(url, "_blank");
   }
   deleteAlert(alertId){
    console.log(alertId);
    this.dataService.deleteAlert(alertId);
   }

}
