import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { APIResponseModel } from '../../../model/interface/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CEventManagement } from '../../../model/class/CEventManagement';
import { SearchPipe } from "../../../search.pipe";

@Component({
  selector: 'app-levent',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchPipe],
  templateUrl: './levent.component.html',
  styleUrl: './levent.component.css'
})
export class LeventComponent implements OnInit{
  eventObj :CEventManagement =  new CEventManagement();   //get from class
  eventList: CEventManagement []=[];   //get class

  isLoader: boolean = true;  //lode wenw blnn

  eventService = inject(UserService)
 // userService: any;
 searchText="";

  ngOnInit(): void {
    this.loadevent();
  }
 loadevent(){
  this.eventService.getEvents().subscribe((res:APIResponseModel)=>{
    this.eventList = res.content;
  })
 }



onDelete(id:number){
 const isDelete = confirm("Are you sure want to delete");
 if(isDelete){
  this.eventService.deleteEventById(id).subscribe((res:APIResponseModel)=>{
    if(res.message){
      alert("event delete sucess");
      this.loadevent();
    }else{
      alert("res.message")
    }
  })
 }

}

@Output() editevent = new EventEmitter<CEventManagement>();

onEdit(data: CEventManagement) {
  this.editevent.emit(data); 
}
}




 
