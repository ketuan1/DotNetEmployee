import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
  
  //this component => code function Load, add, detail, delete employee
export class EmployeeDetailComponent implements OnInit {

  constructor(private service: SharedService) { }
  
  ListEmployee: any = [];
  emp: any;
  UpdateNew: boolean = false;
  Title: any;

  ngOnInit(): void {
    this.LoadEmployee();
  }

  LoadEmployee() {
    this.service.GetEmployee().subscribe(data => {
      this.ListEmployee = data;
    })
  }

  DetailsEmployee(emp: any) {
    this.emp = emp;
    this.UpdateNew = true;
    this.Title = 'Update Employee'
  }

  AddEmployeeNew() {
    this.emp = {
      EmployeeId: 0,
      Name: "",
      Email: "",
      Address: "",
      Salary: ""
    }
    this.UpdateNew = true;
    this.Title = "Add Employee";
  }

  //DeleteEmployee => shared.service
  // DeleteEmployeeNew(emp: any) {
  //   if (confirm("Are you sure you want to delete?")) {
  //       this.service.DeleteEmployee(emp.EmployeeId).subscribe(data => {
  //         alert(data.toString());
  //         this.LoadEmployee();
  //       })
  //     }
  //   }

  Close() {
    this.UpdateNew = false;
    this.LoadEmployee();
  }

}
