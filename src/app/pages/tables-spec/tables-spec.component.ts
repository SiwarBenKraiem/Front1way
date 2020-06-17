import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{SpecialitéService}from 'src/app/services/specialité.service';
import{DomaineService}from'src/app/services/domaine.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-tables-spec',
  templateUrl: './tables-spec.component.html',
  styleUrls: ['./tables-spec.component.css']
})
export class TablesSpecComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private specialite:SpecialitéService,private domaine:DomaineService) { }
  listeS:any[];
  listeD:any;
   id:any;
  ngOnInit(): void {
   
    this.specialite.listerS().toPromise().then(res=>{
        
     
       this.listeS=res;
       let i=0;
      while(this.listeS.length!=i) 
      {console.log(this.listeS[i].id_domaine);
    
      return this.nomDomaine(1);

      
            i++;

    }
  })

  }
  nomDomaine(id_domaine):any
  { this.domaine.chercherDomaine(1).subscribe((res)=>{ 
    console.dir(res);
    this.listeD=(res);
    console.log("h1");
    
 console.log("hhhh"+this.listeD);

 
 })

  }
  deleteSpecialite(list:any)
  {
    let index=this.listeS.indexOf(list)
    this.specialite.deleteSpecilaite(list.code_specialite).subscribe((res)=>{console.log(res);
    this.listeS.splice(index,1);
    this.toastrService.success("","Specialite has been deleted");
   
    },(err)=>{console.log(err);
    })
    
  }
  

}
