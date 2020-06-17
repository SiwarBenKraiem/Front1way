import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupeService } from 'src/app/services/groupe.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-table-grp',
  templateUrl: './table-grp.component.html',
  styleUrls: ['./table-grp.component.css']
})
export class TableGrpComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private grp:GroupeService) { }
  listeG:any[];
  listeSG:any[];
  searchS=false;
  ngOnInit(): void {
    
  this.lister();
  }
  lister():any
  {
    this.grp.liste().subscribe((res)=>{console.dir(res); this.listeG=res;}
    ,(err)=>console.log(err+"erreur"));
    this.listeSG=null;
   
  }
  rederict(id)
  {let url = '/affectation?id=';
  url=url+id;
  console.log(url);
  
    this.router.navigateByUrl("/url");
  }
  deleteG(list:any)
  {
    let index=this.listeG.indexOf(list)
    this.grp.deleteGrp(list.nom).subscribe((res)=>{console.log(res);
    this.listeG.splice(index,1);
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
{this.searchS=true;
  console.log("entre")
  this.grp.chercherG(searchText).subscribe((res)=>{console.dir("yaaaaay"+res);
    this.listeG=res;
    let i=0;
    let id;
    while(this.listeG.length>i)
    {id=this.listeG[i].id;
      this.listeSousGroupe(id);
      i++;
    }
    
    },(err)=>{console.log(err+"nayyyyy");
    })

}
}



drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}

btnhidden=false;
a:any;
listeSousGroupe(id)
{
  this.btnhidden=true;
  this.grp.listeSousGrp(id).subscribe((res)=>{console.dir("yaaaaay"+res);
    this.listeSG=res;
    
    console.log("ff")
    console.dir(res[0]);

    console.dir(this.listeSG);
    
    },(err)=>{console.log(err+"nayyyyy");
    })
   this.num=0;
    
}  
num=0;
number(id)
{
  this.grp.num(id).subscribe((res)=>{console.dir("yaaaaay"+res);
this.num=res;

;
this.btnhidden=false;

},(err)=>{console.log(err+"nayyyyy");
})

}  
}


