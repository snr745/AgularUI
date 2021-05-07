import { Component, OnInit } from '@angular/core';
import{SharedServiceService} from 'src/app/shared-service.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private serivce:SharedServiceService) { }

 

  
  ActivateAddEditComponent:boolean=false;
  ModalTitle:string="";
  DepartmentList:any=[];
  dep:any;
 
  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditComponent = true;
  }

  editClick(item: any) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditComponent = true;
  }

  closeClick(){
    this.ActivateAddEditComponent=false;
    this.refreshDepList();
  }

  refreshDepList() {
    this.serivce.getDepatmentList().subscribe(data=>{
      this.DepartmentList=data;

    });
  }

  DeleteDepartment(item: any) {
    if(confirm("Are you sure ??")){
      this.serivce.DeleteDepartment(item.DepartmentId).subscribe(res=>
        alert(res.toString())
        );
    
        this.refreshDepList();
    }
   
  }
}
