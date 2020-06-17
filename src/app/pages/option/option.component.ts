import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OptionService } from 'src/app/services/option.service';
import { QuestionService } from 'src/app/services/question.service';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
 /* addOption:FormGroup;
 
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private _opservice: OptionService,
) {
    this.addOption=fb.group({
      question: new FormControl('',Validators.required),
      option:new FormControl('',Validators.required),
      is_true: new FormControl('',Validators.required)
   });

  
}
ngOnInit() {
}

Add(){
  let option=this.addOption.value;
  this._opservice.add(option).subscribe((res)=>{
    this.toastrService.success("","option ajouté");
   
  
  },
  error=>{
    this.toastrService.error("","erreur d'ajout");
    console.error(error);

  })
}*/
addQST:FormGroup;
listeSujet:any[];

   

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

   }
     
  

  

  ngOnInit() {
   
    this.QS.Lister().subscribe((res)=>
      {
      console.dir(res);
      this.listeSujet=res;
     }
    ,(err)=>console.log(err+"erreur")
    );
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
}
