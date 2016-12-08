import { Component, OnInit, EventEmitter } from '@angular/core';
import { ProcessService } from './../services/process.service';
import { SharedService } from './../services/shared.service';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import * as settings from './../settings';

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
    title: string = settings.PROCESS_LIST;
    modalTitle: string = settings.ADD_PROCESS;
    showSuccess: boolean = false;
    successMessage: string = settings.PROCESS_ADD_SUCCESS;
    modalRef: any;
    process: string;

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

  open(content, args) {
    /*this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/
    if(!args.add) {
      this.modalTitle = settings.EDIT_PROCESS;
      this.process = "asda";
    } else {
      this.modalTitle = settings.ADD_PROCESS;
      this.process = "";
    }
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
    this.showSuccess = true;

    setTimeout(() => {
      this.showSuccess = false;
    }, 10000);

  }

}