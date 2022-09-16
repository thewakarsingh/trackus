import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-nds';
  constructor( public router:Router){

    if(sessionStorage.getItem('username')==null)
    {
         if(localStorage.getItem('username')==null){
              this.router.navigate(["login"]);
            }
          else{
            var aass=localStorage.getItem('username');
            sessionStorage.setItem('username',JSON.stringify(aass));
            this.router.navigate(["home"]);


          }
        }


 /* setTimeout(() => {

    this.title="New Title generated.";
    
  }, 2000); 
*/
}
}
