import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class ProcessService {
  constructor (private http: Http) {}

  getAllProcesses(): Observable<any[]> {
    return this.http.get('http://localhost:4200/RetrieveAllEquipmentData1.json')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}