import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/user';
import { User } from '../model/class/User';
import { environment } from '../../environments/environment.development';
import { CStudentManagement } from '../model/class/CStudentManagement';

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

  getStudent():Observable<APIResponseModel>{   //api student management
    return this.http.get<APIResponseModel>(environment.API_URL+"studentMG/getAllStudents")
  }

  saveStudents(obj:CStudentManagement):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.post<APIResponseModel>(environment.API_URL+"studentMG/saveStudentMG",obj)
  }

  deleteStudentsById (id:number):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.delete<APIResponseModel>(environment.API_URL+"studentMG/deleteStudent/"+id)
  }

  updateStudents(obj:CStudentManagement):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.put<APIResponseModel>(environment.API_URL+"studentMG/updateStudentMG",obj)
  }
}

 