import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import {observable, Observable} from 'rxjs';
import {Employee} from './employee';
import {Loginemployee} from './login/loginemployee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
url='http://localhost:54868/'
  createloginemployee: any;
    constructor(private http: HttpClient) { }
    
    createemployee(employee:Employee):Observable<Employee> {
      return this.http.post<Employee>(this.url+'api/Employeemasters',employee)
    }
    loginemployee(loginEmployee: Loginemployee): Observable<Loginemployee> {
    return this.http.post<Loginemployee>(this.url + 'api/Login', loginEmployee)
    }
}



    