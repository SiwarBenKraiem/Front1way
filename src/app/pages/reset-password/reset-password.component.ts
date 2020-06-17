import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  ResetGrp:FormGroup;
 
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService, private us:UserServiceService) {
    this.ResetGrp=fb.group({
      email: new FormControl('',Validators.required),
      
  })
}

  ngOnInit(){
  }
  reset(){

    let user=this.ResetGrp.value;
   this.us.forgot(user).subscribe((res)=>{
     console.log(res);
    this.toastrService.success("","test");
  },
  error=>{
    this.toastrService.error(error.error.error);
    console.error(error);

  })
    
  }

}
