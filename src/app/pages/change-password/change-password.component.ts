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
  
  constructor(private fb:FormBuilder,private userService:UserServiceService,private router:Router,private toastrService:ToastrService, private route:ActivatedRoute) { 
    this.changermdpform=fb.group({
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      new_password: new FormControl('',Validators.required),
  });
  
}

ngOnInit() {
}
  changermdp(){
    let user=this.changermdpform.value;
    this.userService.changer(user).subscribe((res)=>{
    
    
    
      this.toastrService.success("mdp modifie");

    }, (err) => {
      this.toastrService.error(err.error.message);
      console.log(err);
    })
  }

  }
