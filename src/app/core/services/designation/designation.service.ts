import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { ApiUrls } from '../../utils/api-urls';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpService) { }

  getDesignationList(params?:any): Observable<any> {
    const getConfigure = ApiUrls.DESIGNATION_DETAILS.designationList  + '?page=' + params;
    return this.http.get(getConfigure);
  }

  addDesignation(params?:any):Observable<any> {
    const postConfigure = ApiUrls.DESIGNATION_DETAILS.designationList 
    return this.http.post(postConfigure,params)
  }

  deleteDesignation(params?:any):Observable<any> {
    const postConfigure = ApiUrls.DESIGNATION_DETAILS.designationList + '/' + params
    return this.http.delete(postConfigure)
  }

  editDesignation(params?:any,id?:any):Observable<any>{
    const postConfigure = ApiUrls.DESIGNATION_DETAILS.designationList + '/' + id
    return this.http.put(postConfigure,params)
  }


}
