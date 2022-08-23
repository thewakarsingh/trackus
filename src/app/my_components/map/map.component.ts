import { Component, OnInit, } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http'
import { interval, merge,from, of,retry, throwError, concatAll, concat, timer, catchError, map,tap, BehaviorSubject, last, first } from 'rxjs';
import { LocationInfo, User } from '../setdata/user';
import { variable } from '@angular/compiler/src/output/output_ast';
import * as geojson from 'geojson';
import { getValue } from '@ngxs/store';
import {RealtimeTracker} from './realtimetracking'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  private mapp:any ;

  prevPoint:LocationInfo={lat:23,log:85,point:1};
  currentLocationObservable = new BehaviorSubject(this.prevPoint);


  constructor(private http: HttpClient, 
  //public ht:RealtimeTracker
    ) {

   // ht.readCurrentPosion();


   var url="https://trackusdatabase-default-rtdb.asia-southeast1.firebasedatabase.app/location.json";
    var data={
      lat:"23",
      log:"211"
    };

   var res=this.http.post(url,data);
   var resss=this.http.get(url);
   console.log("hello:");
   console.log(res); 
   var dataa=res.subscribe(data=>console.log(data));
   console.log(dataa);


    var liveTrack:LocationInfo[]=[];

    var as:LocationInfo={lat:1,log:1,point:1};
    liveTrack.push(as);
var obs=of(liveTrack);
var sub=obs.subscribe(data=>console.log("Location:  "+data[0].lat));


var asa:LocationInfo={lat:1,log:1,point:1};
liveTrack.push(asa);

const currentLocationObservable = new BehaviorSubject(asa);

   }






   
  ngOnInit(): void {


    this.mapp= L.map('map');

    var map=this.mapp.setView([1, 1], 1);


const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(map);

         
  //   var basemaps = {
  //     Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
  //         layers: 'TOPO-WMS'
  //     }),
  
  //     Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
  //         layers: 'OSM-Overlay-WMS'
  //     }),
  
  //     'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
  //         layers: 'TOPO-WMS,OSM-Overlay-WMS'
  //     }),
  
  //     'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
  //         layers: 'OSM-Overlay-WMS,TOPO-WMS'
  //     })
  // };
  
  // L.control.layers(basemaps).addTo(map);
  
  // basemaps.Topography.addTo(map);



//   var baseMaps = {
//     "<span style='color: gray'>Grayscale</span>": grayscale,
//     "Streets": streets
// };

// var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

//   var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
//     rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
// var parks = L.layerGroup([crownHill, rubyHill]);
// var satellite = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

// layerControl.addBaseLayer(satellite, "Satellite");
// layerControl.addOverlay(parks, "Parks");

 }




  

  locatePoint(val:any): void{
    //mapp.remove();
    let xCod=val.xCoordinate;
    let yCod=val.yCoordinate;
    let zoomL=val.zoomL;


    const example = this.currentLocationObservable.pipe(first());
    
    const subscribe = example.subscribe(value =>{
        this.prevPoint.lat=value.lat;
        this.prevPoint.log=value.log;  
        this.prevPoint.point=value.point;

        console.log("prev:");
        console.log(this.prevPoint)
      });

    var loc:LocationInfo={lat:xCod,log:yCod,point:1}

    this.currentLocationObservable.next(loc);


    var map=this.mapp.setView([xCod, yCod], zoomL);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          minZoom: 2,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });  
      tiles.addTo(map);


    if(!val.name){

      var marker = L.marker([xCod, yCod],
        {alt: 'Your Location'}).addTo(map)
        .bindPopup('Point Located:  ' +xCod+'  ,'+yCod);
      
        var circle = L.circle([xCod, yCod], 150, {
          color: 'blue',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: 300
      }).addTo(map);



  }
  
  else{

  var marker = L.marker([xCod, yCod],
    {alt: 'Your Location'}).addTo(map)
    .bindPopup('' +val.name+'  ,'+val.state+'  '+val.country);
  
    var circle = L.circle([xCod, yCod], 150, {
      color: 'blue',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 300
  }).addTo(map);

}

  
  // var popup = L.popup()
  //   .setLatLng([xCod, yCod])
  //   .setContent("Located: "+xCod+", "+yCod)
  //   .openOn(map);


  //   var greenIcon = L.icon({
  //     iconUrl: 'https://img.icons8.com/office/80/000000/map-pin.png',
  //   //  shadowUrl: 'leaf-shadow.png',
  
  //     iconSize:     [38, 95], // size of the icon
  //     shadowSize:   [50, 64], // size of the shadow
  //     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //     shadowAnchor: [4, 62],  // the same for the shadow
  //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  // });

  // L.marker([xCod, yCod], {icon: greenIcon}).addTo(map);

  }






  getPositionByName(val:any){

    console.log("location");
    var url='https://api.openweathermap.org/geo/1.0/direct?q='+val.locaText+'&limit=5&appid=5a22019dff039c0bd66cea0f22484083';
      var url2='https://maps.googleapis.com/maps/api/geocode/json?address='+val.locaText+'&key=AIzaSyD8rcu_ZggvN3JtOiHuwEF3-N9mehg0av8';
    var res=this.http.get(url);
   // var a=res[0].name;
   console.log(res);
    var ress=res.subscribe(data=>{
      console.log(data);

      const keys = Object.keys(data);

      const entries = Object.entries(data);
      
      entries.forEach(([key, value]) => {
        // 👇️ name Tom, country Chile
        console.log(key, value.lat);

        var locationCoord = {
          xCoordinate: value.lat, 
         yCoordinate: value.lon,
         zoomL: 8,
         circle:true,
         name:value.name,
         country: value.country,
         state: value.state

          };
          value.name.toLowerCase( )
        if(value.name.toLowerCase==val.locaText.toLowerCase){

          this.locatePoint(locationCoord);

        }


      });
    });

  }

  getCurrentPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }






  locateMe(){


    this.getCurrentPosition().then(res=>{

      const locationCoord = { xCoordinate: res.lat , yCoordinate: res.lng ,zoomL: 11, circle: true};

      var url= 'https://api.openweathermap.org/geo/1.0/reverse?lat='+res.lat+'&lon='+res.lng+'&limit=5&appid=5a22019dff039c0bd66cea0f22484083';
     // var url2=url;
      var resultW=this.http.get(url);
   // var a=res[0].name;
    resultW.subscribe(data=>{
     console.log(data);
    
    });

    //console.log(url);
      var result=this.http.get(url);
   // var a=res[0].name;
    result.subscribe(data=>{
     console.log(data);

      const keys = Object.keys(data);

      const entries = Object.entries(data);
      
      entries.forEach(([key, value]) => {
        // 👇️ name Tom, country Chile
        console.log(key, value.lat);

        var locationCoord = {
          xCoordinate: value.lat, 
         yCoordinate: value.lon,
         zoomL: 8,
         circle:true,
         name:value.name,
         country: value.country,
         state: value.state

          };
          this.locatePoint(locationCoord);
          })
       });
   });

   this.addGeoJSonMarker();

  }






  addGeoJSonMarker() {

      var vLine: geojson.LineString = {
        type: "LineString",
        coordinates: [
    
          [
            75.234375,
            36.87962060502676
          ],
          [
            77.34374999999999,
            8.059229627200192
          ]
        
          
        ]
    };

  var hLine: geojson.LineString = {
      type: "LineString",
      coordinates: [
            [
              97.27294921875,
              28.188243641850313
            ],
            [
              68.5107421875,
              23.58412603264412
            ]
      ]
    };

      L.geoJSON(vLine).addTo(this.mapp);
      L.geoJSON(hLine).addTo(this.mapp);

    }






  drawLine(a:LocationInfo,b:LocationInfo){


   // var map=this.mapp.setView([b.lat, b.log], 1);


    var myStyle = {
        "color": "blue",
        "weight": 1,
        "opacity":0.8
    };
    var geojsonPoint: geojson.LineString = {
      type: "LineString",
      coordinates: [

        [
          a.log,
          a.lat

        ],
        [
          b.log,
          b.lat

        ]
      ]
    };

    L.geoJSON(geojsonPoint).addTo(this.mapp);


    L.geoJSON(geojsonPoint, {
      style: myStyle
    }).addTo(this.mapp);

  }




  trackUser(){

    this.currentLocationObservable.subscribe({
      next: (value) => {
        var a:LocationInfo={lat: this.prevPoint.lat,log:this.prevPoint.log,point:this.prevPoint.point};
        var b:LocationInfo={lat:value.lat,log:value.log,point:1};

        var map=this.mapp.setView([b.lat, b.log], 9);

        console.log("a:"+this.prevPoint.lat+","+this.prevPoint.log+"b:"+b.lat+","+b.log)
       this.drawLine(a,b);
      }
  });

  }


  trackLive(){

    var idd=1122;


    setInterval(() => {

      navigator.geolocation.getCurrentPosition(resp => {

        var id=1234;

        var url="https://trackusdatabase-default-rtdb.asia-southeast1.firebasedatabase.app/"+id+".json/";

        const d = new Date();

        var tim=d.getTime();

      var data={
        id:id,
        time:tim,
        lat:resp.coords.latitude,
        log:resp.coords.longitude,
        accu:resp.coords.accuracy,
        speed:resp.coords.speed
      };
     var res=this.http.post(url,data);

     var locationCoord = {
      xCoordinate: data.lat, 
     yCoordinate: data.log,
     zoomL: 12,
     circle:true,
     name:"aas",
     country: "India",
     state: "Bihar"

      };
      this.locatePoint(locationCoord);

     var resss=this.http.get(url);
     console.log("hello:");
     console.log(res); 
     var dataa=res.subscribe(data=>console.log(data));
     console.log(dataa);
  

     });



     this.currentLocationObservable.subscribe({
      next: (value) => {
        var a:LocationInfo={lat: this.prevPoint.lat,log:this.prevPoint.log,point:this.prevPoint.point};
        var b:LocationInfo={lat:value.lat,log:value.log,point:1};

       //var map=this.mapp.setView([b.lat, b.log], 9);

        console.log("a:"+this.prevPoint.lat+","+this.prevPoint.log+"b:"+b.lat+","+b.log)
       this.drawLine(a,b);
      }
    })

    }, 15000);



  }










}

















// Wheather Forcast

// https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid={API key} 