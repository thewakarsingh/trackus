import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  signupForm=new FormGroup({
      name:new FormControl('',
        [
          Validators.minLength(3),
          Validators.required
        ]),
      email:new FormControl('',
        [Validators.email
        ]),

      password:new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
       // Validators.pattern(string| RegExp)

      ]),
      confirmPassword:new FormControl('',
      [

      ]),


    });

  ngOnInit(): void {


  }

  onSubmit(val: any){

    this.signupForm.patchValue({
      name:"DiwakarSingh"
    })

    alert(val.password);



  }

  get name(){

    return this.signupForm.get('name');
  }

  get password(){

    return this.signupForm.get('password');
  }

}
