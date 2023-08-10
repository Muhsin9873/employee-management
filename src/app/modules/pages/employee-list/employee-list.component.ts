import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList:any
  public total_count:number
  public pageSize = 10;
  public currPage: number = 0;
  public searchEmployee:string = ''


  constructor( 
     public employeeService: EmployeeService,
     private spinner: NgxSpinnerService ,
     public router: Router,
  ) { }

  ngOnInit() {
    this.getEmployeeData()
  }

  public getEmployeeData(){
    var params = this.currPage+1
    this.spinner.show()
    this.employeeService.getEmployeeList(params).subscribe((result)=>{
      if(result.data){
        this.employeeList = result.data.data;
        this.total_count = result.data.total        
      }
      this.spinner.hide()
    },
    (error)=>{
      this.spinner.hide()
    })
  }

  paginate(event: any){
    this.currPage = event.page;
    this.searchEmployee = ''
    this.getEmployeeData();
  }

  createNewEmployee(){
    this.router.navigateByUrl('/employee/create' );
  }
}
