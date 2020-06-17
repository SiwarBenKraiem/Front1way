import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  liste:any[];
  constructor(private fs:FormationService,private toastrService:ToastrService) { }

  ngOnInit(){
    this.lister();
  }
  lister(){
    this.fs.lister().subscribe((res)=>{console.log("yaaaaay"+res);
    this.liste=res;
    },(err)=>{console.log(err+"nayyyyy");
    })
  }
  Affecter(index){
    this.toastrService.success("","Questionnaire affecté");
    this.liste.splice(index,1);
  }

}
