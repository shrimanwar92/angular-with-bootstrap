import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class ECheckConfigurationService {
  constructor (private http: Http) {}

  getAllEquipmentData(): Observable<any[]> {
    return this.http.get('http://localhost:4200/RetrieveAllEquipmentData1.json')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    var equipments = [];
    
    //console.log(body)
    body.forEach(function(data) {
      //console.log(data.eCheckSKUList)
      data.eCheckSKUList.forEach(function(echeck) {
        console.log(echeck);
        echeck.allowedEquipmentList.forEach(function(eq) {
          console.log(eq);
        })
      });
    });

    return body || {};
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
