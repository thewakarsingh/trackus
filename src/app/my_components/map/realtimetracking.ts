import { Component, OnInit, } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http'
import { interval, merge,from, of,retry, throwError, concatAll, concat, timer, catchError, map,tap } from 'rxjs';
import { LocationInfo, User } from '../setdata/user';
import { variable } from '@angular/compiler/src/output/output_ast';
import * as geojson from 'geojson';


export class RealtimeTracker{


  
  
    constructor(private http: HttpClient) {

        var locationa={lat:Number,lon:Number,point:Number};

        var previousPoint:LocationInfo={lat:1,log:1,point:1};
        var initialPosion=previousPoint;
    
     }


     writeCurrentPosion(){

        navigator.geolocation.getCurrentPosition(resp => {

            var position={lng: resp.coords.longitude, lat: resp.coords.latitude};

            var url='';

            this.http.post(url,position);


          });
      }

      readCurrentPosion(){


        // var url='https://api.openweathermap.org/data/2.5/forecast/daily?lat='+res.lat+'&lon='+res.lng+'&appid=3b5a27eca817cf9eac1374c7d17b546c&units=metric';

        // var resultW=this.http.get(url);
        // resultW.subscribe(data=>{

        //     var locationa={lat:Number,lon:Number,point:Number};


      
            // });
  


        




      }







     }