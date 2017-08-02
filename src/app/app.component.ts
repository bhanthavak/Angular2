import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from './services/loginservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   me:string = "bhanthava";
  hiddenFlag: boolean = true;
  constructor(private LoginserviceService:LoginserviceService){}
ngOnInit(){
  this.LoginserviceService.getJsonResponse().subscribe(
    data => {
      alert(data.name);
    },
    error => {
      alert("error");
    } );
 
}
}

  
 
    



