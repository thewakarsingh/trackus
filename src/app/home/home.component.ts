import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';
  constructor( public router:Router){


    // if(sessionStorage.getItem('username')==null)
    // {
    //      if(localStorage.getItem('username')==null){
    //           this.router.navigate(["app"]);
    //         }
    //       else{   
    //         var aass=localStorage.getItem('username');
    //         sessionStorage.setItem('username',JSON.stringify(aass));
    //         this.router.navigate(["home"]);


    //       }
    //     }


 /* setTimeout(() => {

    this.title="New Title generated.";
    
  }, 2000); 
*/
}
}
