import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionnaireService } from '../services/questionnaire.service';


@Component({
  selector: 'app-dialog-questionnaire',
  templateUrl: './dialog-questionnaire.component.html',
  styleUrls: ['./dialog-questionnaire.component.css']
})
export class DialogQuestionnaireComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialog:MatDialog, private qs:QuestionnaireService,
  private fb:FormBuilder,private router:Router,private toastrService:ToastrService,
  ) { }
  liste:any={};
  title:string; 

  ngOnInit() {
    console.dir(this.data);
    this.liste=this.data.list;
  }
  delete(id){
    this.title=this.data.list.title;
  this.qs.delete(id).subscribe((res)=>{console.log(res);
  
  this.toastrService.success("","questionnaire  supprimé");
  this.dialog.closeAll();
 
},(err)=>{console.log(err);
}
  )
}
  

  annuler()
{
  this.dialog.closeAll();

}

}
