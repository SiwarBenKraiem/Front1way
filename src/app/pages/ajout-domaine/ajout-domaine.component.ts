import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/services/domaine.service';
import { OptionService } from 'src/app/services/option.service';
import { QuestionService } from 'src/app/services/question.service';
import { Option } from 'src/app/Model/option/option.module';
import { from } from 'rxjs';
@Component({
  selector: 'app-ajout-domaine',
  templateUrl: './ajout-domaine.component.html',
  styleUrls: ['./ajout-domaine.component.css']
})
export class AjoutDomaineComponent implements OnInit {

  addDomaineform:FormGroup;
  addOption:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,
    private domaine:DomaineService, private _opservice:OptionService,private qst:QuestionService) { 
    this.addDomaineform=fb.group({
      nom: new FormControl('',Validators.required),
      
      
    })
    this.addOption=fb.group({
     // question: new FormControl('',Validators.required),
      txt:new FormControl('',Validators.required),
      is_true: new FormControl('',Validators.required)
   });
  }

  listeD:any[];
  listequestion:any[];
  
  ngOnInit() {
  
    this.domaine.listerD().subscribe((res)=>{console.dir(res); this.listeD=res;}
    ,(err)=>console.log(err+"erreur"));

    this.qst.Lister().subscribe((res)=>{console.dir(res); this.listequestion=res;}
    ,(err)=>console.log(err+"erreur"));
  }
  get txt() {
    return this.addOption.get('txt');
  }
  get is_true() {
    return this.addOption.get('is_true');
  }

   
  Add(){
    const fd = new FormData();
    let option=this.addOption.value;
    const f= new Option(option.txt,option.is_true);
    console.log("id " + f.is_true);
    //console.log("date " + f.option);
    this._opservice.add(option).subscribe((res)=>{
      this.toastrService.success("","option ajouté");
     
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
  
    })
  }
  deleteDomaine(list:any)
  {
    let index=this.listeD.indexOf(list)
    this.domaine.deleteDomaine(list.code_domaine).subscribe((res)=>{console.log(res);
    this.listeD.splice(index,1);
    this.toastrService.success("","domaine has been deleted");
   
    },(err)=>{console.log(err);
    })
  }
  addDomaine()   
  {
    let dom=this.addDomaineform.value;
    this.domaine.AddDomaine(dom).subscribe(data=>{
      this.toastrService.success("","domaine ajouté");
      this.router.navigateByUrl("/ajout-domaine");
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
     
    }
  )

  }

}
