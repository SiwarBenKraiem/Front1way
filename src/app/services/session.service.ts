import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  AddS(Session){
    return this.http.post(this.apiprefix+"addSession",Session);
    }
    lister():any
    {
      return this.http.get(this.apiprefix+"listeS");
    }
    prolonger(list)
    {
      return this.http.put(this.apiprefix +"prolonger", list);
    }
    affecter_session_formation(id):any
       {
       return this.http.post(this.apiprefix+"affectationFormationSession",id) ; 
        }
    listeaff():any
       {
        return this.http.get(this.apiprefix+"listeAffectation");
       }
       affecter_session_groupe(id):any
       {
       return this.http.post(this.apiprefix+"affectationFormationGroupe",id) ; 
      }
        listeGroupeNonVide()
          {
          return this.http.get(this.apiprefix+"listegrpnonvide");
          }

      listeformation(id){
        return this.http.get(this.apiprefix+"listerformation",id);
      }
      listeusersession(id){
        return this.http.get<any>(this.apiprefix+"listeusersession",id);
      }
  }
