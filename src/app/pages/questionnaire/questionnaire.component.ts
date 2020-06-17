import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  addQSTionnaire:FormGroup;
  listsujet:any[];
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private S_service: SujetService,
    private QS: QuestionnaireService) {
      this.addQSTionnaire=fb.group({
        title: new FormControl('',Validators.required),
        sujet:new FormControl('',Validators.required)})
     }

  ngOnInit() {
    this.S_service.ListerSujet().subscribe((res)=>{console.dir(res); this.listsujet=res;}
    ,(err)=>console.log(err+"erreur"));
  }
  Add()
  {
    let qstn=this.addQSTionnaire.value;
    this.QS.ajouterQST(qstn).subscribe((res)=>{
      console.log("test");
     // this.toastrService.success("","Questionnire ajouté");
      this.router.navigateByUrl("/icons");
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);

    })
  
  }
  
}
