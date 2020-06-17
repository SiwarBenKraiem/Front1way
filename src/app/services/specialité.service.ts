import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialitéService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  listerS():Observable<any>
  {
    return this.http.get(this.apiprefix+"listespecialite");
  }
  NomSpecialite(nomS):any
  {
    return this.http.get(this.apiprefix+"chercherS/"+nomS);
  }
  AddSpecialite(specialite){
    return this.http.post(this.apiprefix+"ajouter",specialite);
    }
    deleteSpecilaite(code)
    {
      return this.http.delete(this.apiprefix+"suppS/"+code)  }
  
}
