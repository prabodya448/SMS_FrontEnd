import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { APIResponseModel, IUser } from '../../../model/interface/user';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {

  userService = inject(UserService);
  isLoader: boolean = true;  //lode wenw blnn
  userList:IUser[]=[];     //any wenuwata  I interface name eka
  

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result:APIResponseModel)=>{     //APIResponce
      this.userList=result.content;
      this.isLoader= false;   //load wenw blnn
   },error=>{
    alert('api error')
    this.isLoader= false; 
    
   }
  )
   
  }
}


