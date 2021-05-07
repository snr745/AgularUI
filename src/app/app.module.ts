import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import{AddEditComponent} from './department/add-edit/add-edit.component';
import{ShowDepComponent} from './department/show-dep/show-dep.component';
import {EmployeeComponent} from './employee/employee.component';
import{AddEditEmpComponent} from './employee/add-edit-emp/add-edit-emp.component';
import{ShowEmpComponent} from './employee/show-emp/show-emp.component';
import{SharedServiceService} from'./shared-service.service';
import {AppRoutingModule} from './app-routing.module'

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddEditComponent,
    ShowDepComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
