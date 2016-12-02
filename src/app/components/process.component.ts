import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProcessService } from './../services/process.service';

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

	constructor(private processService: ProcessService) { 

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