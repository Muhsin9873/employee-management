import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../utils/api-urls';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpService) { }

  getEmployeeList(params?:any): Observable<any> {
    const getConfigure = ApiUrls.EMPLOYEE_DETAILS.employeeList  + '?page=' + params;
    return this.http.get(getConfigure);
  }
}
