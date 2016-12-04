import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProcessService } from './../services/process.service';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'process-view',
  templateUrl: './../templates/process.html',
  //styleUrls: ['./countries.component.css'],
  providers: [ProcessService]
  //pipes: [TwitterDateWithTimePipe]
})

export class ProcessComponent implements OnInit {
	  errorMessage: string;
  	//tweets: Tweet[];
  	processes: any[];
  	mode = 'Observable';
    pp: string = "";
    changeSub: any;

	constructor(private processService: ProcessService, private sharedService: SharedService) { 
    this.pp = this.sharedService.getItemsPerPage();
    this.changeSub = this.sharedService.change
            .subscribe(itemsPerPage => {
                this.pp = itemsPerPage;
                this.ngOnInit();
            });    
	}

	ngOnInit() {
    this.processService.getAllProcesses()
      .subscribe(
         processes => {
           this.processes = processes;
           
         },
         error =>  {
           this.errorMessage = <any>error;
         }
      )
  }
}