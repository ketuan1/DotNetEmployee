import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //link api
  readonly APIUrl = "http://localhost:5243/api";

  constructor(private http: HttpClient) { }

  //list employee
  GetEmployee(): Observable < any[] > {
    return this.http.get<any>(this.APIUrl + '/employee');
  }

  //add employee
  AddEmployee(val:any) {
    return this.http.post(this.APIUrl + '/employee', val);
  }
  
  //Update Employee
  UpdateEmployee(val:any) {
    return this.http.put(this.APIUrl + '/employee', val);
  }

  //delete Employee
  DeleteEmployee(val:any) {
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

}
