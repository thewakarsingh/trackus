import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {SupportFunctions} from 'src/app/my_components/map/supportFiles'
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(
    
    public router:Router,
    
    private fun:SupportFunctions,
    
    ) { }

  ngOnInit(): void {

  }

  addPerson(val:any){

    localStorage.setItem('userToTrack',val.emailid);
    sessionStorage.setItem('username',val.emailid);

    this.router.navigate(["tracker"]);

    this.fun.openSnackBar(val.emailid+ "Added successfully." ,"Close");


  }
}
