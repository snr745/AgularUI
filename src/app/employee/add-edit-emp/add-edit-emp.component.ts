import { Component, OnInit,Input } from '@angular/core';
import {SharedServiceService} from 'src/app/shared-service.service'

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  
  constructor(private service:SharedServiceService) { }
  @Input() emp:any;
  EmployeeId!:string;
  EmployeeName!:string;
  Department!: string;
  DateofJoining!: string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  DepartmentList!:any[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  AddEmployee(){
    var val={EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateofJoining:this.DateofJoining,
      PhotoFileName:this.PhotoFileName,};
    this.service.AddEmployee(val).subscribe(res=>{ 
      alert(res.toString());
    })
  }

  EditDepartment(){
    var val={EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateofJoining:this.DateofJoining,
      PhotoFileName:this.PhotoFilePath,};
    this.service.UpdateEmployee(val).subscribe(res=>{ 
      alert(res.toString());
    })
  }

  loadDepartmentList(){
    this.service.getDepatmentList().subscribe((res:any)=>{ 
      this.DepartmentList=res;
      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateofJoining=this.emp.DateofJoining;
      this.PhotoFileName=this.emp.PhotoFileName;
      console.log("PhotoFileName::"+this.PhotoFileName);
      if(!this.PhotoFileName.includes("http://localhost:55718/Photos/")){
        this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
      }else{
        this.PhotoFilePath=this.emp.PhotoFileName;
      }
      
      console.log("PhotoFilePath::"+this.PhotoFilePath);
    })
    

  }

  UploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('updloadedFile',file,file.Name);
    this.service.UploadPhoto(formData).subscribe(rest=>{
      alert(rest.toString());
      this.PhotoFileName=rest.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;

    })
  }

}
