import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesignationService } from 'src/app/core/services/designation/designation.service';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.scss']
})
export class AddDesignationComponent implements OnInit {

  public addDesignationForm: FormGroup;
  public onClose: Subject<boolean>;


  constructor(
    public formBuilder: FormBuilder,
    public designationService: DesignationService, 
    public messageService: ToasterMessageService,
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    this.createAddDesignationForm()
    this.onClose = new Subject();
  }

  public createAddDesignationForm() {
    this.addDesignationForm = this.formBuilder.group({
      designationName: ['', Validators.required]
    });
  }

  public addNewDesignation(){
    var params = {
      designation_name:this.addDesignationForm.value.designationName
    }

    this.designationService.addDesignation(params).subscribe((result)=>{
      if(result){
        this.messageService.showSuccessToaster("Designation Added Successfully")
        this.onClose.next(true);
        this.modalRef.hide();
      }      
    })
  }

  close(){
    this.modalRef.hide();
  }

}
