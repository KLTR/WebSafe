import { Alert } from './models/alert';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  result:any;
  alerts: Observable<any[]> = null;
  alert: Observable<any> = null;
    constructor(public db: AngularFireDatabase) { 
     this.alerts = db.list<Alert>('alerts',ref => ref.orderByChild('order')).valueChanges();
    }
     
    getAlerts() {
      return this.alerts;
    }
    deleteAlert(alertId){
      let alertRef = this.db.object(`alerts/${alertId}`)
      console.log(alertRef);
      alertRef.remove();
    }
}
