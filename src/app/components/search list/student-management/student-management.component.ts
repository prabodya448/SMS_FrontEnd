import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CStudentManagement } from '../../../model/class/CStudentManagement';
import { SearchPipe } from "../../../search.pipe";

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent implements OnInit{

  studentObj :CStudentManagement =  new CStudentManagement();   //get from class
  studentList: CStudentManagement []=[];   //get class

  isLoader: boolean = true;  //lode wenw blnn

  studentService = inject(UserService)
 // userService: any;
 searchText="";

  ngOnInit(): void {
    this.loadStudent();
  }
 loadStudent(){
  this.studentService.getStudent().subscribe((res:APIResponseModel)=>{
    this.studentList = res.content;
  })
 }

onSaveStudent(){
  debugger;
  this.studentService.saveStudents(this.studentObj).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("User added. refresh your page to load new data");
      this.loadStudent();
    }else{
      alert("res.message")
    }
  })
}

onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.studentService.deleteStudentsById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("student delete sucess");
      this.loadStudent();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() editStudent = new EventEmitter<CStudentManagement>();

onEdit(data: CStudentManagement) {
  this.editStudent.emit(data); 
}

}
