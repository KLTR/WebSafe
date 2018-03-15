import { Alert } from './models/alert';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  result:any;
  last_update: Observable<any> = null;
  highest_confidence: Observable<any> = null;

  alerts: Observable<any[]> = null;
  alert: Observable<any> = null;
  twitter_alerts: Observable<any[]> = null;
  twitter_alert: Observable<any> = null;
  reddit_alerts: Observable<any[]> = null;
  reddit_alert: Observable<any> = null;
  open_alerts: Observable<any[]> = null;
// Data service connects with Firebase database to get all data.
    constructor(public db: AngularFireDatabase) { 
      //getting all alerts
     this.alerts = db.list<Alert>('alerts',ref => ref.orderByChild('order')).valueChanges();
     this.twitter_alerts = db.list<Alert>('alerts',ref => ref.orderByChild('network').equalTo("twitter")).valueChanges();
     this.reddit_alerts = db.list<Alert>('alerts',ref => ref.orderByChild('network').equalTo("reddit")).valueChanges();
     this.open_alerts = db.list<Alert>('alerts',ref => ref.orderByChild('state').equalTo("open")).valueChanges();
     this.last_update = db.list<Alert>('alerts',ref => ref.orderByChild('time_created').limitToLast(1)).valueChanges();
     this.highest_confidence = db.list<Alert>('alerts',ref => ref.orderByChild('order').limitToFirst(1)).valueChanges();

    }
     
    getAlerts() {
      return this.alerts;
    }
    deleteAlert(alertId){
      let alertRef = this.db.object(`alerts/${alertId}`)
      console.log(alertRef);
      alertRef.remove();
    }
    getTwitter(){
      return this.twitter_alerts;
    }
    getReddit(){
      return this.reddit_alerts;
    }
    getOpenAlerts(){
      return this.open_alerts;
    }
    getLastUpdate(){
      return this.last_update;
    }
    getHighestConfidence(){
      return this.highest_confidence;
    }
}
