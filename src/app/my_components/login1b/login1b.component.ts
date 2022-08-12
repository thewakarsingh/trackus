import { Component, OnInit } from '@angular/core';
import { User } from '../setdata/user'
import{ SetDataService } from './setdata.service'

@Component({
  selector: 'app-setdata',
  templateUrl: './login1b.component.html',
  styleUrls: ['./login1b.component.css']
})
export class login1bComponenet implements OnInit {

  constructor(private serve: SetDataService
    ) { 

  }


  public user1:any;

  ngOnInit(): void {


  }

  onSubmit(val:any): void{

   //console.log(this.userModel);
   alert(val.name);

  this.user1=val.name;
    this.user1= "Welcome! "+this.user1;

   //this.serve.uploadData(this.userModel).subscribe(data=> this.userModel=data);

  }

}
