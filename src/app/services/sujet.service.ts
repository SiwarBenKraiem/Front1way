import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";

  AddSujet(sujet){
  return this.http.post(this.apiprefix+"AjouterSujet",sujet);
  }
  ListerSujet():Observable<any>{
    return this.http.get(this.apiprefix+"ListerSujet");
  }
}