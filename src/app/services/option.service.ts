import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

 
  constructor(private http:HttpClient) { }
  apiprefix="/api/";

  add(option :FormData){
    return this.http.post<any>(this.apiprefix+"ajoutoption",option);
  }
}
