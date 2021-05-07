import { Component, OnInit,Input } from '@angular/core';
import {SharedServiceService} from 'src/app/shared-service.service'
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private service:SharedServiceService) { }
  @Input() dep:any;
  DepartmentId!:string;
  DepartmentName!:string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val={DepartmentId:this.DepartmentId,
             DepartmentName:this.DepartmentName};
    this.service.AddDeparment(val).subscribe(res=>{ 
      alert(res.toString());
    })
  }

  editDepartment(){
    var val={DepartmentId:this.DepartmentId,
             DepartmentName:this.DepartmentName};
    this.service.UpdateDepartment(val).subscribe(res=>{ 
      alert(res.toString());
    })
  }

}
