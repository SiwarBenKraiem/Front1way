import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DivcontenuComponent } from '../divcontenu/divcontenu.component';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { createComponent } from '@angular/compiler/src/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  module:FormGroup;
  isDisabled:boolean;
  isDisable=true;
  childComponent = this.co.resolveComponentFactory(DivcontenuComponent); 
  constructor( private router:Router,private toastrService:ToastrService,private modulesService:ModuleService,private fb:FormBuilder ,private co:ComponentFactoryResolver,private v:ViewContainerRef) 
 {
 
      this.module=fb.group({
    nom_module: new FormControl('',Validators.required),
   /* nom_content: new FormControl('',Validators.required),
    type_content: new FormControl('',Validators.required),
      contenu:new FormControl('',Validators.required),*/  })
 }
  ngOnInit() {
    this.modulesService.Isdisable.subscribe(
      value=>this.isDisabeld=value
    )
    this.isDisable=true;
  }
  disable(){
    if(this.module.value)
    {
    this.isDisable=false;
    }
    else this.isDisable=true;
  }

  
  div="";
  i=-1;
  top;
  mtop;
plus()
  { console.log(
   this.module.value);
    this.i++;
    this.modulesService.i=this.i;
    this.modulesService.top=(this.i+1)*30;
   
    this.modulesService.mtop=(-250)+(this.i*250);
    this.top=(this.i+1)*20
    
    this.mtop=0;
    console.log("t"+this.top);
    console.log("mt"+this.mtop);
    if(this.modulesService.mtop>0)
    {this.modulesService.mtop=0;}
   this.v.createComponent(this.childComponent);
    
    
    this.modulesService.changeDisable(true);
   console.log(this.modulesService.mtop+"mtop");
   console.log(this.modulesService.top+"top");
    /*
this.div+=
'<div>'+
'<div class="form-group" id="div'+this.i+'">'+
' <div class="input-group input-group-alternative mb-3">'+
  '<div class="input-group-prepend">'+
    '<span class="input-group-text">'
    +'<i class="ni ni-hat-3"></i></span>'
    +'</div>'+
 ' <input class="form-control" placeholder="Nom contenu" formControlName="nom_content'+this.i+'" id="nom'+this.i+'"type="text" formControlName="nomModule+i"></br>'+
' </div>'+
'</div>'+
+'<div class="form-group">'+
'<div class="input-group input-group-alternative mb-3">'+
'<div class="input-group-prepend">'+'<span class="input-group-text">'+'<i class="ni ni-hat-3"></i>'+'</span>'+'</div>'+
'<select formControlName="type_content'+this.i+'">'
+'<option value="pdf">pdf</option>'
+'<option value="image">image</option>'
+'<option value="texte">texte</option>'
+'</select>'
+'</div></div>'
+'<div class="form-group">'
+'<div class="input-group input-group-alternative mb-3">'
+' <div class="input-group-prepend">'
+'  <span class="input-group-text"><i class="ni ni-hat-3">'
   +' </i></span>'
   +'</div><input class="form-control" placeholder=" contenu" type="file" formControlName="contenu'+this.i+'"> <button (click)="plus()">+</button><br></div></div></div>';
   this.module.addControl(`nom_content${this.i}`,new FormControl(''));
   this.module.addControl(`type_content${this.i}`,new FormControl(''));
   this.module.addControl(`contenu${this.i}`,new FormControl(''));
document.getElementById("ajout").innerHTML = this.div;
 
  document.getElementById("ajout").innerHTML = this.div;
  console.log("rz" +  document.getElementById("nomz"));
*/}
isDisabeld=true;
list:any[];

valuee()
 {
  this.list=[];
  /*console.dir(this.module.value);
  //@ts-ignore
  console.dir( document.getElementById("ajout").childNodes.item(0).childNodes.item(1).childNodes.item(2).value
  );*/ //console.dir(this.childComponent.ngContentSelectors);

    //@ts-ignore
   /* console.dir(this.childComponent);
    if(this.childComponent)
    {
     this.isDisabeld=true;
    }
    else
    this.isDisabeld=true;*/

   let dom=this.module.value;
      
 let i=0;
   
  

  console.log(this.modulesService.tab.length);
        
        this.modulesService.addModule(dom).toPromise().then(data=>
          {
            if(this.modulesService.tab.length>0)
           {
            const formData = new FormData();
            formData.append("nom_module",data);
            for(let i=0;i<this.modulesService.tab.length;i++){ 
                let element =this.modulesService.tab[i];
                formData.append("contenu"+i,element['conten']);
                formData.append("nom_contenu"+i,element['nom_content']);
                formData.append("id_type"+i,element['type_content']);
            }
            formData.append("length",""+this.modulesService.tab.length);
           
           
            return this.modulesService.addContent(formData).toPromise().then(res=>{console.log(res,"con");
            this.toastrService.success("","Module et contenu ajouté");
            this.router.navigateByUrl("/liste-formation");
           
            }),(err)=>console.log(err+"erreur");
      }
        if(this.modulesService.tab.length==0)
        {
          this.toastrService.success("","Module vide ajouté");
          this.router.navigateByUrl("/liste-formation");
        }
       
          
         
         })
        
         ,(err)=>console.log(err+"erreur"); 
       
        }
          
 
        
   
    
      
     // this.router.navigateByUrl("/tables-spec");
    
      }
  
  
    
 
 
 
   
  


    
    
  
 

