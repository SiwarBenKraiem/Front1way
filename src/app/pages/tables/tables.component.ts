import { Component, OnInit } from '@angular/core';
import{UserServiceService}from './../../services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


  constructor(private dom:UserServiceService ,private toastrService:ToastrService) { }

  ngOnInit() {
    
   
    this.lister();
    
    

  }
  lister(){
    this.dom.lister().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })
  }
  liste:any[];
deleteUser(list:any)
{
  
  this.dom.deleteUser(list.id).subscribe((res)=>{console.log(res);
  
  this.toastrService.success("","Utilisateur supprimé");
 
  },(err)=>{console.log(err);
  })




  
}
chercherUser(searchText)
{if(searchText==="")
{
this.lister();
}
else
{
  console.log("entre")
  this.dom.chercherUser(searchText).subscribe((res)=>{console.dir("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })

}
}

}
