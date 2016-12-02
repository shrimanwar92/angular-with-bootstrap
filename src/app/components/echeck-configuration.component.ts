import { Component, OnInit, EventEmitter } from '@angular/core';
import { ECheckConfigurationService } from './../services/echeck-configuration.service';
import '../rxjs-operators';
//import { CountryDetailsComponent } from './countrydetails.component';
//import { CountryFilterPipe } from './countryFilterPipe';

@Component({
  selector: 'display-view',
  templateUrl: './../templates/echeck-configuration.html',
  //styleUrls: ['./countries.component.css'],
  providers: [ECheckConfigurationService]
  //pipes: [CountryFilterPipe]
  //pipes: [TwitterDateWithTimePipe]
})

export class ECheckConfigurationComponent implements OnInit {
  errorMessage: string;
  //tweets: Tweet[];
  equipments: any[];
  mode = 'Observable';
  title: string;

  constructor(private eCheckService: ECheckConfigurationService) { }

  ngOnInit() {
    this.eCheckService.getAllEquipmentData()
      .subscribe(
         equipments => {
           console.log(equipments)
           this.equipments = equipments;
           
         },
         error =>  {
           this.errorMessage = <any>error;
         }
      )
  }
}