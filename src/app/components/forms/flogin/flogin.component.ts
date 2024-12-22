import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css']
})
export class FloginComponent {
  loginObj:any={
    "EmailId":"",
    "Password":""
  }

  http=inject(HttpClient);

  constructor(private router:Router){

  }
// to use this need to open in - ng serve --port 4209

  Onlogin(){
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("login sucsess");
        this.router.navigateByUrl("Fdashboard")
      }else{
        alert("check user name and password")
      }
    })
  }
}
