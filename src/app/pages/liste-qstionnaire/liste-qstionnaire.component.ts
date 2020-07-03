import { Component, OnInit, Inject } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { ToastrService } from 'ngx-toastr';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogQuestionnaireComponent } from 'src/app/dialog-questionnaire/dialog-questionnaire.component';

@Component({
  selector: 'app-liste-qstionnaire',
  templateUrl: './liste-qstionnaire.component.html',
  styleUrls: ['./liste-qstionnaire.component.css']
})
export class ListeQstionnaireComponent implements OnInit {
liste:any[];
  constructor(
   // @Inject(MAT_DIALOG_DATA) public data:any,public dialog:MatDialog,
    private qs:QuestionnaireService,private toastrService:ToastrService) { }

  ngOnInit(){
    this.lister();
  }
  lister(){
    console.log("tesst");
    this.qs.listerQST().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })
  }
 /* opendialog(id)
  {
    this.qs.listerQST(id).toPromise().then((res)=>{ this.liste=res;
  
    
    
    return this.dialog.open(SousgrpDialogComponent,{data:{list:this.liste}});
  
  });
  
  }*/

  chercherUser(searchText)
{if(searchText==="")
{
this.lister();
}
else
{
  console.log("entre")
  this.qs.SearchQST(searchText).subscribe((res)=>{console.dir("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })

}
}
deleteG(list:any)
  {
    //return this.dialog.open(DialogQuestionnaireComponent,{data:{list:list}});
    let index=this.liste.indexOf(list)
    this.qs.delete(list.title).subscribe((res)=>{console.log(res);
    this.liste.splice(index,1);
    this.toastrService.success("","Questionnaire supprimé");
   
    },(err)=>{console.log(err);
    })
  }

}
