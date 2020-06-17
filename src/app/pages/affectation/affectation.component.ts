import { Component, OnInit } from '@angular/core';
import{UserServiceService}from './../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { GroupeService } from 'src/app/services/groupe.service';
@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
id;
  constructor(private dom:UserServiceService ,private grp:GroupeService,private route: ActivatedRoute,private toastrService:ToastrService) {
   
   }

  ngOnInit(): void {
  console.log("hhhh");
   
    this.lister();
      this.id=this.route.snapshot.params.id
 
    

  }
  liste:any[];
  lister(){
    this.dom.lister().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })
  }

  add(idu):any{
    let user;
    let index=this.liste.indexOf(idu);
    user={idU:idu,idG:this.id};
    
    this.grp.Add(user).subscribe((res)=>{console.log("yaaaaay"+res);

    this.liste.splice(index,1);
    },(err)=>{console.log(err+"nayyyyy");
    })

    
    
    
   console.log("ggg"+user);
   
  }

}
