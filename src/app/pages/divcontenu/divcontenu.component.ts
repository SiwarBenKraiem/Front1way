import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from "@angular/common/http";
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-divcontenu',
  templateUrl: './divcontenu.component.html',
  styleUrls: ['./divcontenu.component.css']
})
export class DivcontenuComponent implements OnInit {
  itle = 'resumeMultipleUpload';
  selectedFiles = [];
  div:FormGroup;
  index;
  top=0;
  mtop=0;
 
  constructor(private fb:FormBuilder ,private modulesService:ModuleService,private http: HttpClient) 
 {
 
      this.index=this.modulesService.i;
      this.top+=this.modulesService.top;
      this.mtop+=this.modulesService.mtop;
      this.div=fb.group({
  
    nom_content: new FormControl('',Validators.required),
    type_content: new FormControl('',Validators.required),
      conten:new FormControl ('',Validators.required), 
      nom_module:new FormControl(''),
     })
 }

 selectedValue:any;
  ngOnInit(): void {
    this.selectedValue={};
  }

  edit()
  {
    
  }
  
  selectedFile;
  onSelectedFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onchange(){
    console.log("change ");
    
    this.selectedValue.nom_content=this.div.value.nom_content;
    this.selectedValue.type_content=this.div.value.type_content;
    this.selectedValue.conten=this.selectedFile;
    console.dir(this.div.get("conten").value);
    console.dir(this.selectedValue);
    console.log(this.selectedValue.conten);
    
   
    let disabled=!(this.selectedValue.conten && this.selectedValue.nom_content && this.selectedValue.type_content);
    console.log(disabled);
    
    this.modulesService.changeDisable(disabled);
    console.log(this.selectedValue+"sel");
    console.log(this.index+"in");
    if(!disabled)
    {this.modulesService.FindType(this.selectedValue.type_content).toPromise().then( res=>this.selectedValue.type_content=res) 
    
    
      return this.modulesService.add(this.selectedValue,this.index);
    
    } 
    
    
    
  }
  
listec:Array<{nom_content:string,type_content:string,contenu:string}>;

  pr()
  { //@ts-ignore
   // this.listec[0].nom_content=this.div.value.nom_content;  
   
   
    
    
  }
  drop()
  {
    console.log("eejkl");
    
  }
 
}
