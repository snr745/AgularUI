import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import{Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  readonly ApIUrl='http://localhost:55718/api';
  readonly PhotoUrl='http://localhost:55718/Photos/';

  constructor(private http:HttpClient) { }

  getDepatmentList():Observable<any[]>{
   return this.http.get<any>(this.ApIUrl+'/Department');
  }

  AddDeparment(val:any){
    return this.http.post(this.ApIUrl+'/Department',val);
  }

  UpdateDepartment(val:any){
    return this.http.put(this.ApIUrl+'/Department',val);
  }

  DeleteDepartment(val:any){
    return this.http.delete(this.ApIUrl+'/Department/'+val);
  }

  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.ApIUrl+'/Employee');
   }
 
   AddEmployee(val:any){
     return this.http.post(this.ApIUrl+'/Employee',val);
   }
 
   UpdateEmployee(val:any){
     return this.http.put(this.ApIUrl+'/Employee',val);
   }
 
   DeleteEmployee(val:any){
     return this.http.delete(this.ApIUrl+'/Employee/'+val);
   }

   UploadPhoto(val:any){
     return this.http.post(this.ApIUrl+'/Employee/SaveFile',val);
   }

   GetAllDepartment():Observable<any[]>{
     return this.http.get<any>(this.ApIUrl+'Department/GetAllDepartment')
   }
}
