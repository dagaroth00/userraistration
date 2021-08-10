import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Jobdata } from '../shared/jobdata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobdetailsService {

  
  constructor(private http: HttpClient) { }

  baseUrl: string = 'assets/';

  getJobdetails(): Observable<Jobdata[]>{
    return this.http.get<Jobdata[]>(this.baseUrl+'data.json')
      .pipe(
        catchError(this.handleError)
      );
  }
  
  // getJob(id: number): Observable<Jobdata>{
  //   return this.http.get<Jobdata[]>(this.baseUrl+'data.json')
  //     .pipe(
  //           map(iJobdetails => {
  //             let Job = iJobdetails.filter((cou : Jobdata) => cou.id === id);
  //             return Job[0];
  //         }),
  //       catchError(this.handleError)
  //     )
  // }


  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
