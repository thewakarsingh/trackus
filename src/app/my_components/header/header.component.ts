import { Component, OnInit } from '@angular/core';
import { interval, merge,from, of,retry, throwError, concatAll, concat, timer, catchError, map,tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor() { 

  const a = timer(3000, 2000);
  const b=[3,2,1];
  const b1=[4,5,6];
  const c="hello";
  const err=" This error has occured";
  const second = interval(2000);


  console.log("concat");

  const source0=merge(b);
  const subscribe0 = source0.subscribe(val => console.log(val));


  console.log("of");
  const source1= of(b,c);
  const subscribe1 = source1.subscribe(val => console.log(val));

  console.log("Of on of");
  const sourcefrom= of(of(b),of(b1));
  const subscribefrom = sourcefrom.subscribe(val => console.log(val));

  console.log("merge");
  const source2=merge(b,b1);
  const subscribe2 = source2.subscribe(val => console.log(val));

  console.log("promise");
  const pr=new Promise(resolve => resolve(a));
  const source3= from(pr);
  const subscribe3 = source3.subscribe(val => console.log(val));

  console.log("Throw error:");
  const errormsg=throwError(err);
  const obs = errormsg.pipe(catchError(val =>of(`I caught: ${val}`)));
  const subs=obs.subscribe(val => console.log(val));

console.log("throw and catch error:");
const source = throwError('This is an error!');
const subscribeErr = source.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: val => console.log(`Error: ${val}`)
});

console.log("Map");
const example = from(b1).pipe(map(val => val + 10));
const subm=example.subscribe(val=>console.log(val));

console.log("tap:");
const exampl = source.pipe(
  tap(val => console.log(`BEFORE MAP: ${val}`)),
  map(val => val + 10),
  tap(val => console.log(`AFTER MAP: ${val}`))
);

exampl.subscribe(val=>console.log(val));


console.log("Timer");
//const subscribe = a.subscribe(val => console.log(val));



 // const subscribe = source1.subscribe(val => console.log(val));



  }

  ngOnInit(): void {
  }

}
