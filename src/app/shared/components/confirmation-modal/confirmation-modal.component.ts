import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  public onClose: Subject<boolean>;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(){
    this.onClose = new Subject();
  }

  onSubmit(){
    this.onClose.next(true);
    this.modalRef.hide();
  }

  onCancel(){
    this.modalRef.hide();
  }

}
