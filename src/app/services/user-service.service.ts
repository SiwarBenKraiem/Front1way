import { Injectable } from '@angular/core';
import{HttpClient, HttpEvent, HttpRequest, HttpHeaders}from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  apiprefix="/api/";
  lister():Observable<any>
  {
    return this.http.get(this.apiprefix+"listeUser");
  }
  addUser(user){
    return this.http.post(this.apiprefix+"add",user);
  }
  deleteUser(user)
  {
    return this.http.delete(this.apiprefix+"supp/"+user)  }
    chercherUser(query):any
    {
      return this.http.get(this.apiprefix+"search/"+query);
    }
    suppressionAuto(){
      return this.http.delete(this.apiprefix+"suppAuto")  }
    

  import(file): Observable<HttpEvent<{}>> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.request(
      new HttpRequest("POST",this.apiprefix+"import", formData)
    );
  }

  login(user){
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })

    };
    return this.http.post<any>(this.apiprefix+"login",user,httpOptions);
  }
  Deconnexion()
  {
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Authorization': 'Bearer ' + localStorage.getItem("access_token")
      })

    };
    return this.http.get<any>(this.apiprefix +"logout",httpOptions);
  }
  
  forgot(user )
  {
    return this.http.post<any>(this.apiprefix+"resett",user);
      
   
  }
  changer(user){
    return this.http.post<any>(this.apiprefix+"forgot",user);
  }
  consulter(id){
    return this.http.get<any>(this.apiprefix+"Consulter",id);
  }
  

}
