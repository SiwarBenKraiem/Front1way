import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SujetService } from 'src/app/services/sujet.service';
import { ModuleService } from 'src/app/services/module.service';
import { fileURLToPath } from 'url';
/*import { module } from 'src/app/modules/module';*/


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  addSujetform:FormGroup;
  addModule:FormGroup;
  selectedFile: File;
  /*module :module;*/
 
  private readonly newProperty = null;

  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private S_service: SujetService) { 
    this.addSujetform=fb.group({
      sujet: new FormControl('',Validators.required),
      
      
    })
    /*this.addModule=fb.group({
      Title: new FormControl('',Validators.required),
      Description: new FormControl('',Validators.required),
     fileE: new FormControl('',Validators.required)
      /*Title:[''],
      Description:[''],
      fileE: ['null']
    })*/
  }
  
  ngOnInit() {
    
    }

    addSujet()   
  {
    let sujet=this.addSujetform.value;
    this.S_service.AddSujet(sujet).subscribe(data=>{
      this.toastrService.success("","Sujet  ajouté");
     
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
     
    }
  )

  }
  //selectedFile='';
  /*onSelectedFile(event) {
    this.selectedFile =event.target.files[0];
    /*this.addModule.patchValue({
      fileE: selectedFile
    })
    this.addModule.get('fileE').updateValueAndValidity()
  }
  importModule()
  {
    let module=this.addModule.value;
    console.log("teddy");
   const formData = new FormData();
   //let data = this.addModule.value;
    //const f = new module (data.Title, data.Description,  null);
   
    //formData.append('fileE', this.selectedFile, this.selectedFile.name);
    //formData.append('module',JSON.stringify(f));
  formData.append("Title", this.addModule.get('Title').value);
  formData.append("Description", this.addModule.get('Description').value);
  formData.append("fileE", this.addModule.get('fileE').value);
    this.M_service.Import(formData).subscribe(data=>{
      this.toastrService.success("","module  ajouté");
     
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
     
    })

  }*/
  
   


  
}

