import { Component, OnInit, EventEmitter } from '@angular/core';
import { ECheckConfigurationService } from './../services/echeck-configuration.service';

import { SharedService } from './../services/shared.service';

import '../rxjs-operators';
//import { CountryDetailsComponent } from './countrydetails.component';
//import { CountryFilterPipe } from './countryFilterPipe';

@Component({
  selector: 'display-view',
  templateUrl: './../templates/echeck-configuration.html',
  styleUrls: ['./../app.component.css'],
  providers: [ECheckConfigurationService, SharedService]
  //pipes: [CountryFilterPipe]
  //pipes: [TwitterDateWithTimePipe]
})

export class ECheckConfigurationComponent implements OnInit {
  errorMessage: string;
  equipments: any[];
  mode = 'Observable';
  pp: string = "";
  changeSub: any;
  title: string = "eCheck Configuration";

  constructor(private eCheckService: ECheckConfigurationService,
              private sharedService: SharedService) { 

    this.pp = this.sharedService.getItemsPerPage();
    this.changeSub = this.sharedService.change
            .subscribe(itemsPerPage => {
                this.pp = itemsPerPage;
                this.ngOnInit();
            });    
  }

  ngOnInit() {
    this.eCheckService.getAllEquipmentData()
      .subscribe(
         equipments => {
           this.equipments = equipments;
         },
         error =>  {
           this.errorMessage = <any>error;
         }
      )
  }
}