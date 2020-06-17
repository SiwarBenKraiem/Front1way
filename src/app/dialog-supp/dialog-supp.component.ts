import { Component, OnInit,Inject } from '@angular/core';
import{MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupeService } from 'src/app/services/groupe.service';
import{SpecialitéService}from'src/app/services/specialité.service';
import{UserServiceService}from 'src/app/services/user-service.service';
import{MatDialog} from '@angular/material/dialog';
import { DomaineService } from 'src/app/services/domaine.service';

@Component({
  selector: 'app-dialog-supp',
  templateUrl: './dialog-supp.component.html',
  styleUrls: ['./dialog-supp.component.css']
})
export class DialogSuppComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private user:UserServiceService, public dialog:MatDialog,private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private grp:GroupeService,private dom:DomaineService, private specialite :SpecialitéService) { }
  liste:any={};
  nom:string;

  ngOnInit(): void {
    console.dir(this.data);
    this.liste=this.data.list;
  }
  deleteG(id)
  { 

  if(this.liste.description=="" ||this.liste.description)
  {
  this.grp.deleteGrp(id).subscribe((res)=>{console.log(res);
 
  this.toastrService.success("","groupe supprimé");
  this.dialog.closeAll();
  this.router.navigateByUrl("/tables-grp");
 this.nom=this.data.list.nom;  
  })
} else if(this.liste.Role)
{

  this.nom=this.data.list.nom;
  this.user.deleteUser(id).subscribe((res)=>{console.log(res);
   
  this.toastrService.success("","Utilisateur supprimé");
  this.dialog.closeAll();
  this.router.navigateByUrl("/tables");
  },(err)=>{console.log(err);
  })
}
else if(this.liste.nom_specialite)
{
  this.nom=this.data.list.nom_specialite;
  this.specialite.deleteSpecilaite(id).subscribe((res)=>{console.log(res);
  
  this.toastrService.success("","Specialite supprimé");
  this.dialog.closeAll();
 
  },(err)=>{console.log(err);
}
  )
}
else if(this.liste.nom_domaine)
{
  this.nom=this.data.list.nom_domaine;
    this.dom.deleteDomaine(id).subscribe((res)=>{console.log(res);
    
    this.toastrService.success("","domaine supprimé");
    this.dialog.closeAll();
    },(err)=>{console.log(err);
    })
}
}
annuler()
{this.dialog.closeAll();

}
}

