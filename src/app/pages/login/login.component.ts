import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 
  addLogin:FormGroup;
 
  constructor(private fb:FormBuilder,private router:Router,private toastrService:ToastrService, private us:UserServiceService) {
    this.addLogin=fb.group({
      email: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
  })
}

  ngOnInit() {
  }
  connection(){
    console.log("test");
   let user=this.addLogin.value;
   this.us.login(user).subscribe((res)=>{
    
    
      this.ngOnInit();
      localStorage.setItem('access_token', res.token);
      console.log(localStorage.getItem('access_token'),"test");
      console.log(res.user);
      if(res.user.Role==3){
        this.router.navigateByUrl("/tables-grp");
      }
      else if(res.user.Role==2){
        this.router.navigateByUrl("/module");

      }
     else{ this.router.navigateByUrl("/dashboard");}
      this.toastrService.success("Bienvenue");

    }, (err) => {
      this.toastrService.error(err.error.message);
      console.log(err);
    })
    
    
    
   
  
 
  }

}
