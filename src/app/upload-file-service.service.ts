import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpEvent } from '@angular/common/http/src/response';
import { HttpRequest, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadFileServiceService {

  // constructor(private http: Http) { }

  // pushFileToStorage(file: File): Observable<any> {
  //   const formdata: FormData = new FormData();
  //   formdata.append('file', file);
  //   const cpHeaders = new Headers({ 'Access-Control-Allow-Origin': '*',
  //                                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
  //   const options = new RequestOptions({ headers: cpHeaders });
  //   // const req = new HttpRequest('POST', , formdata, options
  //   // );
  //   // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   // return this.http.request(req);

  //   return this.http.post('http://localhost:8080/storeImage', formdata, options);
  // }

  constructor(private http: HttpClient){}

  pushFileToStorage(file:File,message:string):Observable<any>{
    const formdata: FormData = new FormData();
    formdata.append('file',file);
    formdata.append('message',message);
    const cpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
                                  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
    const httpOptions = { headers : cpHeaders};
    return this.http.post('http://localhost:8080/storeImage',formdata,httpOptions);
    }
}
