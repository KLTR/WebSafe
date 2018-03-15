import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  alerts:any;
  open_alerts:any;
twitter_alerts: any;
open_twitter: number = 0;
reddit_alerts: any;
open_reddit: number = 0;
total_open: number = 0;
last_updated:any;
highest_confidence:any;
  constructor(private dataService: DataService) {
    this.dataService.getAlerts().subscribe(alerts =>{
      this.alerts = alerts;
    })

    this.open_reddit = 0;
    this.dataService.getTwitter().subscribe(alerts => {
      this.twitter_alerts = alerts;
      this.open_twitter = 0;

      for(let i = 0 ; i < alerts.length; i ++){
        if(alerts[i].state == "open"){
          this.open_twitter++;
        }
      }
    })
    this.dataService.getReddit().subscribe(alerts =>{
      this.open_reddit = 0;
      this.reddit_alerts = alerts;
      for(let i = 0 ; i < alerts.length; i ++){
        if(alerts[i].state == "open"){
          this.open_reddit++;
        }
      }
    })

    this.dataService.getOpenAlerts().subscribe(alerts => {
      this.open_alerts = alerts;
      this.total_open = alerts.length;
    })
    this.dataService.getLastUpdate().subscribe(alert =>{
      this.last_updated = alert;
    })
    this.dataService.getHighestConfidence().subscribe(alert => {
      console.log(alert)
      this.highest_confidence = alert;
    })
}

  ngOnInit() {

  

  }

}
