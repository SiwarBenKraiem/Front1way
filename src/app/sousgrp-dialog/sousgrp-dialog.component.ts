import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GroupeService } from 'src/app/services/groupe.service';
import{DialogSuppComponent}from 'src/app/dialog-supp/dialog-supp.component';

import{MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-sousgrp-dialog',
  templateUrl: './sousgrp-dialog.component.html',
  styleUrls: ['./sousgrp-dialog.component.css']
})
export class SousgrpDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialog:MatDialog,private grp: GroupeService,private toastrService:ToastrService ) { }

  ngOnInit(): void {
    console.dir(this.data);
    
  
  }
  listeG=this.data.list;
  deleteG(list:any)
  {return this.dialog.open(DialogSuppComponent,{data:{list:list}});
    /*
    let index=this.listeG.indexOf(list)
    this.grp.deleteGrp(list.id).subscribe((res)=>{console.log(res);
    this.listeG.splice(index,1);
    this.toastrService.success("","groupe supprimé");
   
    },(err)=>{console.log(err);
    })*/
  }
  num=0;
  number(id)
  {
    this.grp.nums(id).subscribe((res)=>{console.dir("yaaaaay"+res);
  this.num=res;
  
  ;
  
  
  },(err)=>{console.log(err+"nayyyyy");
  })
  
  }
}
