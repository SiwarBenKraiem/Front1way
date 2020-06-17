import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';
import { TableGrpComponent } from '../pages/table-grp/table-grp.component';
 

@Component({
  selector: 'app-dialog-formation-session',
  templateUrl: './dialog-formation-session.component.html',
  styleUrls: ['./dialog-formation-session.component.css']
})
export class DialogFormationSessionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialog:MatDialog,private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private mo:SessionService) { }
  listeD:any;
  LGNV=[];
  IsFormation=false;
  ngOnInit(): void {
    if(!this.data.listG)
    {
    this.IsFormation=true;
    this.listeFormation();
    console.log(this.IsFormation);
    
    }
   else{
this.data.listG.forEach(element => {
  if(element.length>0)
  {
    console.log(element);
    this.LGNV.push(element[0]);
    console.log(this.LGNV);
    this.listeD=this.LGNV;
    
  }});

   }
  }
   
 
  liste:any[];
  
  listeaff=[];

  listeFormation()
  {
 
 
  let i=0;
  this.mo.listeaff().toPromise()
  .then(res=>{this.listeaff=res;
        
        
       
         this.listeaff.forEach(element => {
           i=0;
            
           
           while(i<this.data.list.length)
           { 
          
          if(this.data.idS==element.session_id && this.data.list[i].id==element.formation_id)
           {
             
            this.data.list.splice(i,1);
           }
          i++;
          }
          })
      
       this.listeD=this.data.list;
       
        console.log(this.listeD);
        

        return this.listeD;})
}
affecter(id)
{
  this.liste=[];
    this.liste[0]=this.data.idS;
    this.liste[1]=id;
 
     
    
    let i=0;
     
    this.mo.affecter_session_formation(this.liste).subscribe((res)=>{ 
      this.toastrService.success("","affectation avec succées  "); 
      while(i<this.listeD.length)
      { 
     
     if(this.listeD[i].id==this.liste[1])
      {
        console.log("bnj if2 ");
        
       this.listeD.splice(i,1);
      }
     i++;
     }
     if(this.listeD.length<1)
     {
      this.dialog.closeAll();
     }
     }
    ,(err)=>{console.dir(err+"erreur")
    this.toastrService.error("","erreur d'affectation")
  }) ;

  }
  affecterGroupe(id)
  {this.liste=[];
    this.liste[0]=this.data.idS;
    this.liste[1]=id;
    let i=0;
    this.mo.affecter_session_groupe(this.liste).subscribe((res)=>{ 
      this.toastrService.success("","affectation avec succées  "); 
      while(i<this.listeD.length)
      { 
     
     if(this.listeD[i].id==this.liste[1])
      {
        console.log("bnj if2 ");
        
       this.listeD.splice(i,1);
      }
     i++;
     }
     if(this.listeD.length<1)
     {
      this.dialog.closeAll();
     }
     }
    ,(err)=>{console.dir(err+"erreur")
    this.toastrService.error("","erreur d'affectation")
  }) ;


  }

}
  


