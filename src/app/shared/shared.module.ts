import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './components/header/header.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipe/filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AddDesignationComponent } from './components/add-designation/add-designation.component';
import { FilterEmployeePipe } from './pipe/filter-employee.pipe';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { EditDesignationComponent } from './components/edit-designation/edit-designation.component';

@NgModule({
  imports: [
    CommonModule,
    InputSwitchModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    FilterPipeModule,
    NgxSpinnerModule,
    MessagesModule,
    MessageModule,
    AvatarGroupModule,
    
  ],
  exports: [
    HeaderComponent,
    FilterPipe,
    MessagesModule,
    NgxSpinnerModule,  
    FilterEmployeePipe 
  ],

  declarations: [
    HeaderComponent,
    FilterPipe,
    AddDesignationComponent,
    FilterEmployeePipe,
    ConfirmationModalComponent,
    EditDesignationComponent,
  ],
  entryComponents: [
    AddDesignationComponent,
    EditDesignationComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [
  ],
})
export class SharedModule {}
