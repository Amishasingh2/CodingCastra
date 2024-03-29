import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  error: false;
  
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        
        this.datasaved = true;
        this.massage = "User Created";
        this.regForm.reset();
      }
    )
  }
}
