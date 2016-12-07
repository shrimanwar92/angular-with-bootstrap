import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProcessService } from './../services/process.service';
import { SharedService } from './../services/shared.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'process-view',
  templateUrl: './../templates/process.html',
  styleUrls: ['./../app.component.css'],
  providers: [ProcessService, NgbActiveModal]
  //pipes: [TwitterDateWithTimePipe]
})

export class ProcessComponent implements OnInit {
	  errorMessage: string;
  	//tweets: Tweet[];
  	processes: any[];
  	mode = 'Observable';
    pp: string = "";
    changeSub: any;
    title: string = "Process List";
    modalTitle: string = "Add Process";
    dataAddedSuccessfully: boolean = false;
    modalRef: any;

	constructor(private processService: ProcessService, private sharedService: SharedService, private modalService: NgbModal, activeModal: NgbActiveModal) { 
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

  open(content) {
    /*this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/
    this.modalRef = this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

  dismiss() {
    this.modalRef.dismiss();
  }

  onSubmit(form: any, content): void {  
    console.log('you submitted value:', form);
    this.close();
    this.dataAddedSuccessfully = true;
  }

}