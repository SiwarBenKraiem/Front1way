import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response-password',
  templateUrl: './response-password.component.html',
  styleUrls: ['./response-password.component.css']
})
export class ResponsePasswordComponent implements OnInit {
  changerform:FormGroup;
  constructor(private fb:FormBuilder,private userService:UserServiceService,private router:Router,private toastrService:ToastrService ) { 
    this.changerform=fb.group({
      current_password:new FormControl('',Validators.required),
      new_password: new FormControl('',Validators.required),
      new_password_confirmation: new FormControl('',Validators.required),
    }

    );
  }

  ngOnInit(): void {
  }
  changer(){
    let user=this.changerform.value;
    console.log("tesst");
   
    this.userService.updateMdp(user).subscribe((res)=>{
    
    
    
      this.toastrService.success("mdp modifie");

    }, (err) => {
      this.toastrService.error(err.error.message);
      console.log(err);
    })
  }
  

}
