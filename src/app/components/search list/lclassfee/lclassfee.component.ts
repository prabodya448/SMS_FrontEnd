import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CClassFee } from '../../../model/class/CClassFee';
import { SearchPipe } from "../../../search.pipe";

@Component({
  selector: 'app-lclassfee',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './lclassfee.component.html',
  styleUrl: './lclassfee.component.css'
})
export class LclassfeeComponent implements OnInit {
  classFeeObj :CClassFee =  new CClassFee();   //get from class
  classFeeList: CClassFee []=[];   //get class

  isLoader: boolean = true;  //lode wenw blnn

  classFeeService = inject(UserService)
 // userService: any;
 searchText="";

  ngOnInit(): void {
    this.loadclassFee();
  }
 loadclassFee(){
  this.classFeeService.getClassFees().subscribe((res:APIResponseModel)=>{
    this.classFeeList = res.content;
  })
 }



onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.classFeeService.deleteClassFeeById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("classFee delete sucess");
      this.loadclassFee();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() editclassFee = new EventEmitter<CClassFee>();

onEdit(data: CClassFee) {
  this.editclassFee.emit(data); 
}





 

}





