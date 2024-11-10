import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.get<APIResponseModel>("http://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
  }
}
