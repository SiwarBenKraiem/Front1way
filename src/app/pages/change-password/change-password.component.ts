import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changermdpform:FormGroup;
  btndisabled=false;
  
  constructor(private fb:FormBuilder,private userService:UserServiceService,private router:Router,private toastrService:ToastrService, private route:ActivatedRoute)
   { 
    this.changermdpform=fb.group({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      password_confirmation: new FormControl('',Validators.required),
      resetToken:null
  });
  route.queryParams.subscribe(params => {
    this.changermdpform.patchValue({
      resetToken:params['token']
   
  });
  this.changermdpform.get('resetToken').updateValueAndValidity();
 
  });
}
  




ngOnInit() {
 

}
  changermdp(){

    console.log("tests");
    this.btndisabled=true;
    let data=this.changermdpform.value;
   
    this.userService.changer(data).subscribe((res)=>{
    
    
    
      this.toastrService.success("mdp modifie");
      this.router.navigateByUrl("/dashboard");

    }, (err) => {
      this.toastrService.error(err.error.message);
      console.log(err);
    })
  }

  }

