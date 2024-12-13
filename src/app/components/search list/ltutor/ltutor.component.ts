import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CTutor } from '../../../model/class/CTutor';
import { SearchPipe } from "../../../search.pipe";

@Component({
  selector: 'app-ltutor',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './ltutor.component.html',
  styleUrl: './ltutor.component.css'
})
export class LtutorComponent implements OnInit {
  tutorObj :CTutor =  new CTutor();   //get from class
  tutorList: CTutor []=[];   //get class

  isLoader: boolean = true;  //lode wenw blnn

  tutorService = inject(UserService)
 // userService: any;
 searchText="";

  ngOnInit(): void {
    this.loadtutor();
  }
 loadtutor(){
  this.tutorService.getTutor().subscribe((res:APIResponseModel)=>{
    this.tutorList = res.content;
  })
 }



onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.tutorService.deleteTutorsById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("tutor delete sucess");
      this.loadtutor();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() edittutor = new EventEmitter<CTutor>();

onEdit(data: CTutor) {
  this.edittutor.emit(data); 
}
}
