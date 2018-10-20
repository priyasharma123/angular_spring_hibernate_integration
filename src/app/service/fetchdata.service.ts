import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  Headers, RequestOptions  } from '@angular/http';
import { ImageMessage } from 'src/app/imagemessage.class';
import { map } from 'rxjs/operators';


@Injectable()
export class FetchdataService {

  constructor(private http: HttpClient ) {
   }

  //  get data(imageMessage: Array<ImageMessage> ): Observable<ImageMessage> {
  //    return this.http.post(, imageMessage)
  //    .pipe(map(this.extractData));
  //  }
  //  userData(customer: Object): Observable<Object> {
  //   return this.http.post('http://localhost:8080/getimages', customer);
  // }
  //  extractData(res: Response) {
  //   const body = res.json();
  //   return body || {};
  // }
  // private handleErrorObservable (error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.message || error);
  //     }


  fetchAllData() {
    return this.http.get<ImageMessage[]>('http://localhost:8080/getimages');
  }
}
