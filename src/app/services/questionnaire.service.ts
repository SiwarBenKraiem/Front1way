import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";

  ajouterQST(questionnaire){
    return this.http.post(this.apiprefix+"storeQuestionnaire",questionnaire);
  }
  listerQST():Observable<any>{
    return this.http.get(this.apiprefix+"ListerQuestionnaire");
  }
  SearchQST(query):any
  {
    return this.http.get(this.apiprefix+"SearchQST/"+query);
  }
  delete(nom)
  {
    return this.http.delete(this.apiprefix+"deleteQ/"+nom);
  }
}
