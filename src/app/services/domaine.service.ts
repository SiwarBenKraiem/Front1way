import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  listerD():Observable<any>
  {
    return this.http.get(this.apiprefix+"listeDomaine");
  }


  NomDomaine(nomD):any
  {
    return this.http.get(this.apiprefix+"chercherD/"+nomD);
  }
AddDomaine(domaine){
return this.http.post(this.apiprefix+"addDomaine",domaine);
}
deleteDomaine(code)
    {
      return this.http.delete(this.apiprefix+"suppD/"+code)  }
      chercherDomaine(req):Observable<any>
      {
        return this.http.get(this.apiprefix+"chercherDomaine/"+req);
      }
  
}
