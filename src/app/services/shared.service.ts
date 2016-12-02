import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PAGE_SIZES } from '../settings';
import '../rxjs-operators';

@Injectable()
export class SharedService {

  itemsPerPage: string = PAGE_SIZES[0];
  public change: EventEmitter<string> = new EventEmitter<string>();

  constructor (private http: Http) {


  }

  setItemsPerPage(itemsPerPg: string) {
    this.itemsPerPage = itemsPerPg;
    this.change.emit(this.itemsPerPage);
  }

  getItemsPerPage(): string {
    return this.itemsPerPage;
  }

}