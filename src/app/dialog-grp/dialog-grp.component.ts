import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupeService } from 'src/app/services/groupe.service';

import{MatDialog} from '@angular/material/dialog';
import { SousgrpDialogComponent } from '../sousgrp-dialog/sousgrp-dialog.component';
import{DialogSuppComponent}from 'src/app/dialog-supp/dialog-supp.component';
import{DialogProlongationComponent} from 'src/app/dialog-prolongation/dialog-prolongation.component'

@Component({
  selector: 'app-dialog-grp',
  templateUrl: './dialog-grp.component.html',
  styleUrls: ['./dialog-grp.component.css']
})
export class DialogGrpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialog:MatDialog,private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private grp:GroupeService) { }
  listeSG:any={};
isUser=false;
listeD:any;
  LGNV=[];
  ngOnInit(): void {
    console.dir(this.data);
    if(this.data.id==0)
    {
      this.isUser=true;
      this.data.list.forEach(element => {
        if(element.length>0)
        {
          console.log(element);
          this.LGNV.push(element[0]);
          console.log(this.LGNV);
          this.listeD=this.LGNV;
          console.log(this.listeD);
          
          
        }});
      
         }
         else this.listeD=this.data.list;
    }
    
  
  opendialog(id)
{
  this.grp.listeSousGrp(id).toPromise().then((res)=>{ this.listeSG=res;

  
  
  return this.dialog.open(SousgrpDialogComponent,{data:{list:this.listeSG}});

});

}

  deleteG(list:any)
  {return this.dialog.open(DialogSuppComponent,{data:{list:list}});
    /*let index=this.listeD.indexOf(list)
    this.grp.deleteGrp(list.id).subscribe((res)=>{console.log(res);
    this.listeG.splice(index,1);
    this.toastrService.success("","groupe supprimé");
   
    },(err)=>{console.log(err);
    })*/
  }
  num=0;
  number(id)
{
  this.grp.numss(id).subscribe((res)=>{console.dir("yaaaaay"+res);
this.num=res;

;


},(err)=>{console.log(err+"nayyyyy");
})

} 
prolongerApprenant(id)
{return this.dialog.open(DialogProlongationComponent,{data:{idU:id,idG:this.data.idG,id:0}});


}
}
