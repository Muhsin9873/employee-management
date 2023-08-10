import { Component, OnInit } from '@angular/core';
import { DesignationService } from 'src/app/core/services/designation/designation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { AddDesignationComponent } from 'src/app/shared/components/add-designation/add-designation.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { ToasterMessageService } from 'src/app/core/services/toaster-message/toaster-message.service';
import { EditDesignationComponent } from 'src/app/shared/components/edit-designation/edit-designation.component';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.scss']
})
export class DesignationListComponent implements OnInit {

  public designationList:any=[]
  public total_count:number
  public pageSize = 10;
  public currPage: number = 0;
  public searchDesignation:string=''
  constructor( 
    public designationService: DesignationService, 
    private spinner: NgxSpinnerService ,
    public addComponentBSModalRef: BsModalRef,
    private modalService: BsModalService,
    public messageService: ToasterMessageService,
  )
 { }

  ngOnInit() {
    this.getDesignationData()
  }

  public getDesignationData(){
    var params = this.currPage+1
    this.spinner.show()
    this.designationService.getDesignationList(params).subscribe((result)=>{
      this.designationList = result.data.data;
      this.total_count = result.data.total
      this.spinner.hide()
    },
    (error)=>{
      this.spinner.hide()
    })
  }

  paginate(event: any){
    this.currPage = event.page;
    this.searchDesignation = ''
    this.getDesignationData();
  }

  addNewDesignation(){
    this.addComponentBSModalRef = this.modalService.show(AddDesignationComponent,{
      class: 'modal-md modal-dialog-centered custom-model'
    });

    (<AddDesignationComponent>this.addComponentBSModalRef.content).onClose.subscribe((result) => {      
      if (result === true) {
        this.currPage=0
        this.getDesignationData();

      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  deleteDesignation(desig_id:number){
    this.addComponentBSModalRef = this.modalService.show(ConfirmationModalComponent,{
      class: 'modal-md modal-dialog-centered custom-model'
    });

    (<ConfirmationModalComponent>this.addComponentBSModalRef.content).onClose.subscribe((result) => {
            
      if (result === true) {
        this.designationService.deleteDesignation(desig_id).subscribe((data)=>{
          if(data.error == 'Designation cant delete'){
            this.messageService.showErrorToaster(data.error)
          }
          else{
            this.messageService.showSuccessToaster('Designation Deleted Succesfully')
            this.getDesignationData();
          }
        })

      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

  editDesignation(desig_data?:any){
    this.addComponentBSModalRef = this.modalService.show(EditDesignationComponent,{
      class: 'modal-md modal-dialog-centered custom-model'
    });

    (<EditDesignationComponent>(this.addComponentBSModalRef.content)).editdetails(desig_data);
    (<EditDesignationComponent>this.addComponentBSModalRef.content).onClose.subscribe((result) => {
            
      if (result === true) {
        this.getDesignationData()

      } else if (result === false) {
        // when pressed No
      } else {
        // When closing the modal without no or yes
      }
    });
  }

}
