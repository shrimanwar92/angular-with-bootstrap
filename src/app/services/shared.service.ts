import {Injectable, EventEmitter} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PAGE_SIZES } from '../settings';
import '../rxjs-operators';

@Injectable()
export class SharedService {

  itemsPerPage: string = PAGE_SIZES[0];
  public change: EventEmitter<string> = new EventEmitter<string>();
  pageNumber: number;

  constructor (private http: Http) {

  }

  // this page is getting set from pagination-controls.directive.ts
  setItemsPerPage(itemsPerPg: string) {
    this.itemsPerPage = itemsPerPg;
    this.change.emit(this.itemsPerPage);
  }

  getItemsPerPage(): string {
    return this.itemsPerPage;
  }

 // this page is getting set from pagination-controls.directive.ts
  setPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    alert(this.pageNumber)
  }

  getPage(): number {
    return this.pageNumber;
  }

}