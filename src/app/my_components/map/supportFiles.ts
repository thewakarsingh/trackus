import { Component, Injectable, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LocationInfo,AddressInfo, User } from '../../../app/Models/user';
import { HttpClient } from '@angular/common/http'

@Injectable ()

export class SupportFunctions {

    constructor(private _snackBar:MatSnackBar, private http:HttpClient){

        
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
 openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }




 distance( lat1:number, lat2:number, lon1:number, lon2:number)
 {
 
 // The math module contains a function
 // named toRadians which converts from
 // degrees to radians.
 lon1 =  lon1 * Math.PI / 180;
 lon2 = lon2 * Math.PI / 180;
 lat1 = lat1 * Math.PI / 180;
 lat2 = lat2 * Math.PI / 180;
 
 // Haversine formula
 let dlon = lon2 - lon1;
 let dlat = lat2 - lat1;
 let a = Math.pow(Math.sin(dlat / 2), 2)
 + Math.cos(lat1) * Math.cos(lat2)
 * Math.pow(Math.sin(dlon / 2),2);
 
 let c = 2 * Math.asin(Math.sqrt(a));
 
 // Radius of earth in kilometers. Use 3956
 // for miles
 let r = 6371;
 
 // calculate the result
 return(c * r);
 }
 
 
 info:AddressInfo={
     
   speed:0,
   dir:0,
   name:"Not Fount",
   state: "Not Found",
   country: "Not Found",
}
 
 locationDetails(a:LocationInfo, b:LocationInfo) :AddressInfo{
 
 
   var dis=this.distance(a.lat,b.lat,a.log,b.log);
   var speed=dis*60*60/10;   //Speed is in Km/h
   speed=Math.round(speed); 
 
   var dir=this.angle(a.lat,b.lat,a.log,b.log);
 console.log(dir);
 
   var c:AddressInfo={
     speed:speed,
     dir:dir,
     name:"Not Fount",
     state: "Not Found",
     country: "Not Found",
   };
 
   this.info.speed=speed;
   this.info.dir=dir;
 
 
   var url='http://api.openweathermap.org/geo/1.0/reverse?lat='+b.lat+'&lon='+b.log+'&limit=5&appid=10967902e5dbf2b8378b27e9e05156f0';
   
   var res= this.http.get(url);
 
   var ress=res.subscribe(data=>{
 
 
      const keys = Object.keys(data);
 
      const entries = Object.entries(data);
      
      entries.forEach(([key, value]) => {
        // 👇️ name Tom, country Chile
      //  console.log(key, value.lat);
  var infoa:AddressInfo={
     
     speed:speed,
     dir:dir,
     name:value.name,
     state: value.state,
     country: value.country,
     };
    this.info=infoa;
 //console.log(infoa);
 //console.log(info);
 return c;
 
          });
       });
 
 return c;
 }
 
 
  angle(cx:number,ex:number, cy:number, ey:number): number {
   var dy = ey - cy;
   var dx = ex - cx;
   var theta = Math.atan2(dy, dx); // range (-PI, PI]
   theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
   //if (theta < 0) theta = 360 + theta; // range [0, 360)
   return theta;
 }
 
 //  add(x: number, y: number): AddressInfo {
 
 
 //   var a:AddressInfo={speed:12,dir:12,name:"a",state:"a",country:"a"}
 //   return a;
 //   }
 
 
 }


