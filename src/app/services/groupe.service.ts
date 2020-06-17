import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  AddGrp(grp){
    return this.http.post(this.apiprefix+"addgrp",grp);
    }
    Add(grp){
      return this.http.post(this.apiprefix+"affectationA",grp);
      }
    
    deleteGrp(code)
        {
          return this.http.delete(this.apiprefix+"suppG/"+code)  }
    liste():any
    {
      return this.http.get(this.apiprefix+"listeGroupe");
    }
    num(id):any
    {
      return this.http.get(this.apiprefix+"number/"+id);
    }
    nums(id):any
    {
      return this.http.get(this.apiprefix+"numbers/"+id);
    }
    numss(id):any
    {
      return this.http.get(this.apiprefix+"numberss/"+id);
    }
    chercherG(query):any
    {
      return this.http.get(this.apiprefix+"searchG/"+query);
    }
    
    listeSousGrp(query):any
    {
    return this.http.get(this.apiprefix+"listesousgrp/"+query);
    }
listeUser(query)
{
  return this.http.get(this.apiprefix+"listeUserGrp/"+query);  


}


    }

