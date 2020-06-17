import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ControlContainer, CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupeService } from 'src/app/services/groupe.service';
@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  addGrpform:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService,private grp:GroupeService) { 
    this.addGrpform=fb.group({
      nom: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      
    })
  }

  listeG:any[];
  
  ngOnInit() {
  
   
  }
  
  addGrp()   
  {
    let dom=this.addGrpform.value;
    this.grp.AddGrp(dom).subscribe(data=>{
      this.toastrService.success("","groupe ajouté");
      this.router.navigateByUrl("/tables-grp");
    
    },
    error=>{
      this.toastrService.error("","erreur d'ajout");
      console.error(error);
     
    }
  )

  }

}
