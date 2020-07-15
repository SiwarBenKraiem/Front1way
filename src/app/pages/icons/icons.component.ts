import { Component, OnInit, NgModule } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SujetService } from 'src/app/services/sujet.service';
import { QuestionService } from 'src/app/services/question.service';



//import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  addQST:FormGroup;
rows:FormArray;


   

constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private S_service: SujetService,
  private QS: QuestionService) { 
  
    this.addQST=fb.group({
      txt_question: new FormControl('',Validators.required),
      sujet:new FormControl('',Validators.required),
      descriptif_reponse: new FormControl('',Validators.required),
      txt: new FormControl('',Validators.required),
      is_true: new FormControl('',Validators.required),
      /*choice4: new FormControl('',Validators.required),*/
    })

    this.rows = this.fb.array([]);

   }
     
  

  

  ngOnInit() {

    
  }
  Add(){
    let question=this.addQST.value;
    console.log("test");
    this.QS.add(question).subscribe((res)=>{
      console.log("test");
      this.toastrService.success("","Question ajouté");
     
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);

    })
  }
 

addrow(){
  this.rows.push(this.createItemFormGroup());
  	
}
createItemFormGroup():FormGroup {
  return this.fb.group({
    txt: null,
    
  });

}
  

/*input(){
  var $Increment=0;
 
    var $saisi= new Array();
    $Increment = $Increment + 1;
  var div='<div class="input-group mb-3">'+
             '<input type="text" class="form-control" aria-label="Text input with checkbox" id="id['+$Increment+']">'+
' </div>';
document.getElementById('div').innerHTML += div;
$saisi[$Increment] = $("#id["+$Increment+"]").val();
}*/

}
