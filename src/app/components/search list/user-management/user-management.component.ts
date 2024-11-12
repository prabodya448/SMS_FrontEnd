import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter,inject,OnInit, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { APIResponseModel, IUser } from '../../../model/interface/user';
import { CommonModule } from '@angular/common';
import { User } from '../../../model/class/User';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

  userObj : User =  new User();   //get
  userList: User[]=[];   //get

  isLoader: boolean = true;  //lode wenw blnn

  userService = inject(UserService)

  ngOnInit(): void {
    this.loadUser();
  }
 loadUser(){
  this.userService.getUsers().subscribe((res:APIResponseModel)=>{
    this.userList = res.content;
  })
 }

onSaveUser(){
  debugger;
  this.userService.saveUsers(this.userObj).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("User added. refresh your page to load new data");
      this.loadUser();
    }else{
      alert("res.message")
    }
  })
}

onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.userService.deleteUsersById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("User delete sucess");
      this.loadUser();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() editUser = new EventEmitter<User>(); // emit eka user edit wlt

onEdit(data: User) {
  this.editUser.emit(data); // select user emit krnn
}
}





