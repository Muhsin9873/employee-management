import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DesignationService } from 'src/app/core/services/designation/designation.service';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.scss']
})
export class EditDesignationComponent implements OnInit {

  public editDesigData:any
  public editDesignationForm: FormGroup;
  public onClose: Subject<boolean>;

  constructor(
    public formBuilder: FormBuilder,
    public designationService: DesignationService, 
    public messageService: ToasterMessageService,
    public modalRef: BsModalRef,
    private spinner: NgxSpinnerService ,
  ) { }

  ngOnInit() {
    this.createEditDesignationForm()
    this.onClose = new Subject();
  }

  createEditDesignationForm(){
    this.editDesignationForm = this.formBuilder.group({
      designationName: ['', Validators.required]
    });
  }

  editdetails(data?:any){
    this.editDesigData = data
    this.patchFormData()
    
  }

  patchFormData(){
    this.editDesignationForm.get('designationName').patchValue(this.editDesigData.name);
  }

  editDesignation(){
    var params = {
      designation_name : this.editDesignationForm.value.designationName
    }
    this.spinner.show()
    this.designationService.editDesignation(params,this.editDesigData.id).subscribe((res)=>{
      if(res.message == 'Designation has been updated'){
        this.spinner.hide()
        this.messageService.showSuccessToaster("Designation updated Successfully")
        this.onClose.next(true);
        this.modalRef.hide();
      }
      else{
        this.spinner.hide()
        this.modalRef.hide();
        this.messageService.showErrorToaster("Update failed - Try again later.")
      }      
    })
  }

  close(){
    this.modalRef.hide();
  }

}
