import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/services/domaine.service';

@Component({
  selector: 'app-tables-domaine',
  templateUrl: './tables-domaine.component.html',
  styleUrls: ['./tables-domaine.component.css']
})
export class TablesDomaineComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private grp:DomaineService) { }
  listeD:any[];
  ngOnInit(): void {
    this.lister();
  }
  lister():any
  {
    this.grp.listerD().subscribe((res)=>{console.dir(res); this.listeD=res;}
    ,(err)=>console.log(err+"erreur"));
  }
  deleteG(list:any)
  {
    let index=this.listeD.indexOf(list)
    this.grp.deleteDomaine(list.nom).subscribe((res)=>{console.log(res);
    this.listeD.splice(index,1);
    this.toastrService.success("","groupe supprimé");
   
    },(err)=>{console.log(err);
    })
  }
  chercherG(searchText)
{if(searchText==="")
{
this.lister();
}
else
{
  console.log("entre")
  this.grp.chercherDomaine(searchText).subscribe((res)=>{console.dir("yaaaaay"+res);
    this.listeD=res;
    },(err)=>{console.log(err+"nayyyyy");
    })

}
}
}
