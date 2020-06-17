import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";

  add(qst){
    return this.http.post(this.apiprefix+"storeQuestion",qst);
  }
  Lister():Observable<any>{
    return this.http.get(this.apiprefix+"listqst");
  }
}
