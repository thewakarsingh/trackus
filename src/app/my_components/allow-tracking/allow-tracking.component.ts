import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import {SupportFunctions} from 'src/app/my_components/map/supportFiles'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-allow-tracking',
  templateUrl: './allow-tracking.component.html',
  styleUrls: ['./allow-tracking.component.css']
})
export class AllowTrackingComponent implements OnInit {
  
  
  public  trackingStatus=false;

  constructor(    
    
    private datepipe: DatePipe,
    private http: HttpClient,
    private fun:SupportFunctions,
    private router: Router,


    ) { }

  ngOnInit(): void {
  }

  sendTracking(){
    
    
    var email=sessionStorage.getItem('username');
    var username=JSON.stringify(email)

    username =  username.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, '') ;
    username=username.replace(/\s/g, '')

    var zoom=18;

    var idd=1122;

    var date = new Date();
    var LatDate:any =this.datepipe.transform(date, 'dd_MM_YYYY');

    setInterval(() => {

      navigator.geolocation.getCurrentPosition(resp => {

        var id=1234;

        var url="https://trackusdatabase-default-rtdb.asia-southeast1.firebasedatabase.app/"+username+"_"+LatDate+".json";

      var data={
    
        speed:resp.coords.speed,
        time:resp.timestamp,
        lat:resp.coords.latitude,
        log:resp.coords.longitude,
        accu:resp.coords.accuracy,
        altitude:resp.coords.altitude,
        direction:resp.coords.heading
          }


          
        
      ;

  var res=this.http.post(url,data);
  var result=this.http.get(url);

 var dataa=res.subscribe(data=>{var a=2;});//


     });


    } , 10000);

    this.fun.openSnackBar("You are Now being Tracked on Id: " +email,"Close");

this.trackingStatus=true;
  }





}
