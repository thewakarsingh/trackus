import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User} from './user'


@Injectable({
  providedIn: 'root'
})


export class SetDataService {
url='https://mocki.io/v1/5a9843ac-786d-40b9-af5c-573ade4d2b42';
  constructor( private http: HttpClient) { }

  public uploadData(user: any){

   return this.http.post<any>(this.url,JSON.stringify(user));

  }
}
