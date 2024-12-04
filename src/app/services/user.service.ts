import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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
    return this.http.get<APIResponseModel>(environment.API_URL+"smsBK/getAllStudents")
  }

  saveStudents(obj:CStudentManagement):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.post<APIResponseModel>(environment.API_URL+"smsBK/StudentSave",obj)
  }

  deleteStudentsById (id:number):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.delete<APIResponseModel>(environment.API_URL+"smsBK/studentDelete/"+id)
  }

  updateStudents(obj:CStudentManagement):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
    return this.http.put<APIResponseModel>(environment.API_URL+"smsBK/studentUpdate/",obj)
  }

  getStudentById(stId: string): Observable<CStudentManagement> {
    return this.http.get<{ message: string; student: CStudentManagement }>(`http://localhost:8000/smsBK/getStudentById/${stId}`).pipe(
      map((response) => response.student), // Extract the student object
      catchError((error) => {
        console.error('Error fetching student:', error);
        return throwError(() => new Error('Failed to fetch student details.'));
      })
    );
  }
  
  // getStudentById (id:number):Observable<APIResponseModel>{   //api modle eka api walin ena outeka interface wlt aran
  //   return this.http.delete<APIResponseModel>(environment.API_URL+"smsBK/studentDelete/"+id)
  // }

  submitAttendance(attendanceData: any): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${environment.API_URL}smsBK/submitAttendance`, attendanceData);
  }
  
  
}

 