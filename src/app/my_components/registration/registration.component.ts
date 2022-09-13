import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageClient } from "cloudmailin"
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    if(sessionStorage.getItem('username')!=null)
    this.router.navigate(["/map"]);

    if(localStorage.getItem('username')!=null)
    this.router.navigate(["/map"]);


  }



  onSubmit(val:any): void{
    localStorage.setItem('username',val.username);
    sessionStorage.setItem('username',val.username);

    this.router.navigate(["/map"]);
 
    //this.serve.uploadData(this.userModel).subscribe(data=> this.userModel=data);
 
   }

}
