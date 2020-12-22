import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
//import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule,FormsModule} from '@angular/forms';





@NgModule({
  declarations: [RegistrationComponent, LoginComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }




