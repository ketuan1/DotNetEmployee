import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
  
  // this component => code function for add anf update form display of employee
export class EmployeeItemComponent implements OnInit {

  employeeIdI: any;
  nameI: any;
  emailI: any;
  addressI: any;
  salaryI: any;

  @Input() emp: any;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  
    this.employeeIdI = this.emp.EmployeeId;
    this.nameI = this.emp.Name;
    this.emailI = this.emp.Email;
    this.addressI = this.emp.Address;
    this.salaryI = this.emp.Salary;
  }
   

  AddItemEmployee() {
    var val = {
      name: this.nameI,
      email: this.emailI,
      address: this.addressI,
      salary: this.salaryI
    };
    this.service.AddEmployee(val).subscribe(res => {
      alert(res.toString());
    })
  }
  
  UpdateItemEmployee() {
    var val = {
     employeeId: this.employeeIdI,
     name: this.nameI,
     email: this.emailI,
     address: this.addressI,
     salary: this.salaryI
    };
    this.service.UpdateEmployee(val).subscribe(res => {
      alert(res.toString());
    })
  }
}
