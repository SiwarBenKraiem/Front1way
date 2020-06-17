import { Component, OnInit } from '@angular/core';

import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-liste-module',
  templateUrl: './liste-module.component.html',
  styleUrls: ['./liste-module.component.css']
})
export class ListeModuleComponent implements OnInit {

  constructor(private m:ModuleService) { }
  searchS=false;
  listeM:any[];
  ngOnInit(): void {
  this.lister();
}
lister()
{
  this.m.listeModule().toPromise().then((res)=>{
    this.listeM=res;

})
}
chercherF(searchText)
{
  if(searchText==="")
{
this.lister();
}
else
{this.searchS=true;
console.log("entre")
this.m.chercherM(searchText).subscribe((res)=>{console.dir("yaaaaay"+res);
  this.listeM=res;
  
  
  
  },(err)=>{console.log(err+"nayyyyy");
  })

}
}

}
