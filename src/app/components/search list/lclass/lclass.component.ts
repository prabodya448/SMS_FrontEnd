import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CClassManagement } from '../../../model/class/CClassManagement';
import { SearchPipe } from "../../../search.pipe";

@Component({
  selector: 'app-lclass',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './lclass.component.html',
  styleUrl: './lclass.component.css'
})
export class LclassComponent implements OnInit{
  classObj :CClassManagement =  new CClassManagement();   //get from class
  classList: CClassManagement []=[];   //get class

  isLoader: boolean = true;  //lode wenw blnn

  classService = inject(UserService)
 // userService: any;
 searchText="";

  ngOnInit(): void {
    this.loadclass();
  }
 loadclass(){
  this.classService.getClasses().subscribe((res:APIResponseModel)=>{
    this.classList = res.content;
  })
 }



onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.classService.deleteClassById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("class delete sucess");
      this.loadclass();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() editclass = new EventEmitter<CClassManagement>();

onEdit(data: CClassManagement) {
  this.editclass.emit(data); 
}
}







