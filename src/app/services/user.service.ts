import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/user';
import { User } from '../model/class/User';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.get<APIResponseModel>(environment.API_URL+"user/getAllUsers")
  }

  saveUsers(obj:User):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.post<APIResponseModel>(environment.API_URL+"user/saveUser",obj)
  }

  deleteUsersById (id:number):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.delete<APIResponseModel>(environment.API_URL+"user/deleteUser/"+id)
  }

  updateUsers(obj:User):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.put<APIResponseModel>(environment.API_URL+"user/updateUser",obj)
  }

}

 