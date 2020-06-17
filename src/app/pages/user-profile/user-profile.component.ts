import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomaineService } from 'src/app/services/domaine.service';
import{SpecialitéService}from 'src/app/services/specialité.service'





@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  adduserform:FormGroup;
  adduserformExcel:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserServiceService,private router:Router,private toastrService:ToastrService,private domaine:DomaineService,private specialite:SpecialitéService) { 
    this.adduserform=fb.group({
      nom: new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      Role: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.email),
      code_domaine: new FormControl(''),
      code_specialite: new FormControl(''),
      suppression: new FormControl(''),
      dateSuppression:new FormControl('')
      
    })
    this.adduserformExcel=fb.group({
      fileE: new FormControl('',Validators.required),
     
      
    })
  }
  btndisabled=false;
  btn2disabled=false;
  listeD:any[];
  listeS:any[];
  ngOnInit() {
  
    this.domaine.listerD().subscribe((res)=>{console.dir(res); this.listeD=res;}
    ,(err)=>console.log(err+"erreur"));
    this.specialite.listerS().subscribe((res)=>{console.dir(res); this.listeS=res;}
    ,(err)=>console.dir(err+"erreur"));
    
  }
  import()
  {
    this.btn2disabled=true;
    this.userService.import(this.selectedFile).subscribe((res)=>{console.dir(res);}
  ,(err)=>console.log(err+"erreur"));

  }
 
  adduser()
  {
    this.btndisabled=true;
    let user=this.adduserform.value;
    if(user.Role != 3)
      this.fn2(user);
    else
      {
        if(user.code_domaine === "")
        {
          this.toastrService.warning("","Please select a domaine");
          this.btndisabled=false;
        }
        else if(user.code_specialite === "")
        {
          this.toastrService.warning("","Please select a specialite");
          this.btndisabled=false;
        }
        else
          console.dir(user.dateSuppression);
           this.fn(user);
      }
  }

  fn(user){
    
   this.domaine.NomDomaine(user.code_domaine).toPromise()
   .then(res=>{
   
    
      user.code_domaine=res[0];
      return this.specialite.NomSpecialite(user.code_specialite).toPromise();

    
  
  }
   )
   .then(res=>{
    console.dir(res);
    user.code_specialite=res[0];
   
    if(user.suppression!=true)
      {user.suppression=false;}
   
    //user.code_domaine=domainec;
    //user.code_specilaite=Specialitec;

    console.log("codespe"+ user.code_specialite)
    user.suppression=user.suppression;

    
      return this.userService.addUser(user).toPromise();
    }
    )
    .then(
      data=>{
     
        this.toastrService.success("","utilisateur ajouté avec succès");
        this.router.navigateByUrl("/tables");
        this.btndisabled=false;
      }
    )
    .catch(
      error=>{
        this.toastrService.error("Obss !!!","erreur d'ajout"+error);
        console.error(error);
        this.btndisabled=false;
      }
    )
  }

  fn2(user){
    this.userService.addUser(user).subscribe(
      data=>{
        if(data==1)
        {
        this.toastrService.success("","utilisateur ajouté ");}
        else if(data==0)
        {this.toastrService.error("email existe déja !!!","erreur d'ajout");}
        else if(data==3 )
        {this.toastrService.warning("utilisateur était supprimer  !!!","Utilisateur ajouté");}
        this.router.navigateByUrl("/tables");
        this.btndisabled=false;
      },
      error=>{
        
        console.dir("err"+error);
        this.btndisabled=false;
      }
    )
  }

  selectedFile;
  onSelectedFile(event) {
    this.selectedFile = event.target.files[0];
  }
}
