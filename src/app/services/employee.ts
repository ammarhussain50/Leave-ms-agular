import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   private http = inject(HttpClient);

  //  for login
    onLogin(obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login", obj);
  }

  // to gget employess
  getAllEmployees():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees");
  }




  // to gget employess
  getDept():Observable<any[]> {
    return this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments").pipe(
      map((res: any) => res.data)
    );




  }


//   In Angular, when you call an API using HttpClient, it returns an Observable.
// pipe() lets you use RxJS operators like map, filter, catchError to transform the stream before subscribing.


// Here:
// it’s RxJS pipe.
// Its purpose is to transform or filter the observable’s values.
// You’re correct: if API returns { status, message, data } but you only need data, use RxJS pipe with map.
}
