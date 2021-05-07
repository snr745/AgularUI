import { Component, OnInit } from '@angular/core';
import{SharedServiceService} from 'src/app/shared-service.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedServiceService) { }
  ActivateAddEditComponent:boolean=false;
  ModalTitle:string="";
  emp:any;
 

  EmployeeList:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getEmployeeList().subscribe(data=>{
      this.EmployeeList=data;

    });
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: "",
      Department: "",
      DateofJoining: "",
      PhotoFileName:"anonymous,png"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditComponent = true;
  }

  editClick(item: any) {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditComponent = true;
  }

  closeClick(){
    this.ActivateAddEditComponent=false;
    this.refreshEmpList();
  }

  DeleteEmployee(item: any) {
    if(confirm("Are you sure ??")){
      this.service.DeleteEmployee(item.EmployeeId).subscribe(res=>
        alert(res.toString())
        );
    
        this.refreshEmpList();
    }
  }

}
