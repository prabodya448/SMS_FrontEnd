import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { APIResponseModel } from '../model/interface/user';
import { User } from '../model/class/User';
import { environment } from '../../environments/environment.development';
import { CStudentManagement } from '../model/class/CStudentManagement';
import { CTutor } from '../model/class/CTutor';
import { CClassManagement } from '../model/class/CClassManagement';
import { CEventManagement } from '../model/class/CEventManagement';
import { CClassFee } from '../model/class/CClassFee';


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
  
  


  //tutor
getTutor(): Observable<APIResponseModel> {
  return this.http.get<APIResponseModel>(environment.API_URL + 'smsBK/getAllTutors');
}

saveTutors(obj: CTutor): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + 'smsBK/tutorSave', obj);
}

deleteTutorsById(id: number): Observable<APIResponseModel> {
  return this.http.delete<APIResponseModel>(environment.API_URL + 'smsBK/tutorDelete/' + id);
}

updateTutors(obj : CTutor): Observable<APIResponseModel> {
  return this.http.put<APIResponseModel>(environment.API_URL + 'smsBK/tutorUpdate/' , obj);
}


//class
getClasses(): Observable<APIResponseModel> {
  return this.http.get<APIResponseModel>(environment.API_URL + 'smsBK/getAllClassMgs');
}

saveClass(classData: CClassManagement): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + 'smsBK/classMgSave', classData);
}

deleteClassById(id: number): Observable<APIResponseModel> {
  return this.http.delete<APIResponseModel>(environment.API_URL + 'smsBK/classDelete/' + id);
}



updateClass(obj : CClassManagement): Observable<APIResponseModel> {
  return this.http.put<APIResponseModel>(environment.API_URL + 'smsBK/classMGtUpdate/' , obj);
}


//event
 // Get all events
 getEvents(): Observable<APIResponseModel> {
  return this.http.get<APIResponseModel>(environment.API_URL + 'smsBK/getAllEvents');
}

// Save a new event
saveEvent(eventData: CEventManagement): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + 'smsBK/eventMgSave', eventData);
}


// Update an event
updateEvent(obj : CEventManagement): Observable<APIResponseModel> {
  return this.http.put<APIResponseModel>(environment.API_URL + 'smsBK/eventUpdate/' , obj);
}

// Delete an event by ID
deleteEventById(id: number): Observable<APIResponseModel> {
  return this.http.delete<APIResponseModel>(environment.API_URL + 'smsBK/eventDelete/' + id);
}

//get
getClassFees(): Observable<APIResponseModel> {
  return this.http.get<APIResponseModel>(environment.API_URL + 'smsBK/getAllClassFee');
}

// Save a new class fee
saveClassFee(classFeeData: CClassFee): Observable<APIResponseModel> {
  return this.http.post<APIResponseModel>(environment.API_URL + 'smsBK/classFeeSave', classFeeData);
}

// Update class fee by ID
updateClassFee(classFeeData: CClassFee): Observable<APIResponseModel> {
  return this.http.put<APIResponseModel>(environment.API_URL + 'smsBK/classFeeUpdate', classFeeData);
}

// Delete class fee by ID
deleteClassFeeById(id: number): Observable<APIResponseModel> {
  return this.http.delete<APIResponseModel>(environment.API_URL + 'smsBK/classFeeDelete/' + id);
}

}

