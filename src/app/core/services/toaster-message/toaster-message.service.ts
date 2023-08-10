import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrMessages } from '../../utils/toastr-messages';

@Injectable({
  providedIn: 'root'
})
export class ToasterMessageService {
  alertMsg: string;
  msgTitle: string;
  constructor(private toastr: ToastrService) {
    this.alertMsg = '';
    this.msgTitle = '';
  }
  /**
   * Description: Shows an error alert message
   */
  public showErrorToaster(message: string, title?: string) {
    this.msgTitle = title ? title : ToastrMessages.TOASTR_TITLES.error;
    this.toastr.error(message);
  }
  /**
   * Description: Shows a warning alert message
   */
  public showWarningToaster(message: string, title?: string) {
    this.msgTitle = title ? title : ToastrMessages.TOASTR_TITLES.warning;
    this.toastr.warning(message);
  }
  /**
   * Description: Shows a success alert message
   */
  public showSuccessToaster(message: string, title?: string) {
    this.msgTitle = title ? title : '';
    this.toastr.success(this.msgTitle,message);
  }
  /**
   * Toaster to show the response
   * @param data includes the response data
   */
  public showToaster(data: any) {
    if (data && data.isSuccess === true) {
      if (data.message && data.message !== undefined) {
        this.showSuccessToaster(data.message);
      } else {
        this.showSuccessToaster('Success');
      }
    }
  }
 
}
