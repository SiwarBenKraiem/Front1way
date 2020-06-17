import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{SpecialitéService}from 'src/app/services/specialité.service';
import{DomaineService}from 'src/app/services/domaine.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ajout-specialite',
  templateUrl: './ajout-specialite.component.html',
  styleUrls: ['./ajout-specialite.component.css']
})
export class AjoutSpecialiteComponent implements OnInit {

  addSpecialiteform:FormGroup;
  constructor(private fb:FormBuilder,private route: ActivatedRoute ,private router:Router,private toastrService:ToastrService,private specialite:SpecialitéService,private domaine:DomaineService) { 
    this.addSpecialiteform=fb.group({
      nom: new FormControl('',Validators.required),
      code_domaine: new FormControl('',Validators.required),
      
      
    })
  }

  listeD:any[];
  id;
  ngOnInit() {
    this.id=this.route.snapshot.params.id
    
  }
  addSpecialite()   
  {let dom=this.addSpecialiteform.value;
    
   
    
      dom.code_domaine=this.id;
      this.specialite.AddSpecialite(dom).subscribe(data=>{
      this.toastrService.success("","specialite ajouté");
      this.router.navigateByUrl("/ajout-specialite");
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
     
    }
  )

}
}
