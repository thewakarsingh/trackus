import { Component, OnInit } from '@angular/core';
import { User } from './user'
import{ SetDataService } from './set-data.service'

@Component({
  selector: 'app-setdata',
  templateUrl: './setdata.component.html',
  styleUrls: ['./setdata.component.css']
})
export class SetdataComponent implements OnInit {

  constructor(private serve: SetDataService
    ) { 

  }


  public user1:any;
  public result:any;

  ngOnInit(): void {


  }

  userModel=new User("","ddwakar1@gmail.com","")

  onSubmit(val:any): void{
(val);
   console.log(val);


  this.user1=val.name;
   

    this.result=this.serve.uploadData(this.user1);
    this.result.subscribe((data: any)=>console.log(data));

    console.log("Result from components1");

   alert(this.result);

   console.log("Result from components2");

   console.log(this.result);

   console.log("Result from components3");
    this.user1= "Welcome! "+this.user1;
  }

}
