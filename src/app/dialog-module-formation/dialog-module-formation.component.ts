import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



import{MatDialog} from '@angular/material/dialog';
import { ModuleService } from '../services/module.service';
 


@Component({
  selector: 'app-dialog-module-formation',
  templateUrl: './dialog-module-formation.component.html',
  styleUrls: ['./dialog-module-formation.component.css']
})
export class DialogModuleFormationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialog:MatDialog,private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private mo:ModuleService) { }
  listeD:any;
  
  ngOnInit(): void {
   this.listemodule();
   }
  liste:any[];
  
   listeaff:any[];
listemodule():any
{
  console.log("liste module");
  this.listeaff=[];
  let i=0;
  this.mo.listeaff().toPromise()
  .then(res=>{this.listeaff=res;
          console.log(this.listeaff)
         
           this.listeaff.forEach(element => {
             i=0;
             console.log(this.data.list.length+"length");
             
             while(i<this.data.list.length)
             { 
            
            if(this.data.idf==element.id_formation && this.data.list[i].id==element.id_module)
             {
               console.log("bnj if ");
               
              this.data.list.splice(i,1);
             }
            i++;
            }
            })
         console.log(this.data.list);
         console.log(this.data.idf);
         this.listeD=this.data.list;
         
         console.log(this.listeD);
  
          return this.listeD;})
}
 

  



   
  
  


 
 
  
/*
      if(this.lis.
        //this.lisa.id_module)
     return  ;
     } )*/
    
    

  affecter(id)
  {this.liste=[];
    this.liste[0]=this.data.idf;
    this.liste[1]=id
    this.liste[2]=""
    console.log(this.liste);
    let i=0;
    this.mo.affecter_module_formation(this.liste).subscribe((res)=>{ 
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
