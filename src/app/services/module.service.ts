import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  i:number;
  top:number;
  mtop:number;
  tab:any[];
  Isdisable: Observable<boolean>;
  private IsdisableSubject = new BehaviorSubject<any>(false);
  apiprefix="/api/";
  constructor(private http:HttpClient) { 
    this.tab=[];
    this.Isdisable = this.IsdisableSubject.asObservable();
    this.IsdisableSubject.next(false);
  }

  changeDisable(data) {
        this.IsdisableSubject.next(data);
  }
  add(data,index){
    this.tab[index]=data;
    this.mtop=120;
    this.top=120;
  }

  addContent(tabv):any 
  {return this.http.post(this.apiprefix+"addContenu",tabv);


  }
  addModule(nom_module):any
  {
    return this.http.post(this.apiprefix+"addModule",nom_module);
  }
  FindType(nom_type):any
  {
    return this.http.get(this.apiprefix+"findIdType/"+nom_type);
  }
  listeModule():any
  {
    return this.http.get(this.apiprefix+"listeModule");
  }
  affecter_module_formation(id):any
     {
       return this.http.post(this.apiprefix+"affectationModuleFormation",id) ;  }
  listeaff():any
       {
        return this.http.get(this.apiprefix+"listeA");
       }
       chercherM(query):any
       {
         return this.http.get(this.apiprefix+"chercherM/"+query);
       }
}
