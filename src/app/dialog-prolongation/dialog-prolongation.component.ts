import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import{  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import{SessionService}from '../services/session.service'
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-prolongation',
  templateUrl: './dialog-prolongation.component.html',
  styleUrls: ['./dialog-prolongation.component.css']
})
export class DialogProlongationComponent implements OnInit {
  ProlongerSession:FormGroup;
  Isdisabled:boolean;
  list={id:1,date_fin:"17/07/1998"}
  
 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private toastrService:ToastrService,private fb:FormBuilder,private session:SessionService) {
    this.ProlongerSession=fb.group({
    
      date_fin: new FormControl(data.date_fin,Validators.required),})
   }
mydate:any;
listeS:any;
isUserP=false;
  ngOnInit(): void {
    if(this.data.id==0)
    {
      this.isUserP=true;
    this.session.lister().subscribe(res=>{console.log(res);this.listeS=res;})

    }
    else{
    console.log(this.data);
   
  
   console.log(this.mydate=formatDate(new Date(), 'yyyy-MM-dd', 'en'));
   console.log(this.ProlongerSession.value.date_fin );
   

   }
   
    
  }
  sessiond(s)
  {console.log("bonjour");
  console.log(this.listeS);
  
   console.dir(s);
  
 
    this.ProlongerSession.value.date_fin=s;
 
  }
  
  ProlongerSessions()
  
  {
    this.list.id=this.data.id;
    this.list.date_fin=this.ProlongerSession.value.date_fin;
    this.session.prolonger(this.list).subscribe(data=>{console.log(data)
    if(data===1)
      {this.toastrService.success("prolongation avec succées ")

      }
      else
      
        {this.toastrService.error("prolongation avec succées ")

      }
});
  
    
    console.log("bonjour");

    
  }
  changee()
  {
    
    
  if(this.ProlongerSession.value.date_fin<this.mydate||this.ProlongerSession.value.date_fin< this.data.date_fin)
{console.log("test");
this.Isdisabled=true;
}
else 
if(this.ProlongerSession.value.date_fin>=this.mydate||this.ProlongerSession.value.date_fin> this.data.date_fin)

{
  console.log("test 2");
  this.Isdisabled=false;
}
  }

}
