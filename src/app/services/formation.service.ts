import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  lister():Observable<any>
  {
    return this.http.get(this.apiprefix+"Listerf");
  }
}
